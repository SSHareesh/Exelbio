import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { countries, DEFAULT_COUNTRY } from "../data/countries";

export default function PhoneInput({
  value = "",
  onChange,
  selectedCountry = DEFAULT_COUNTRY,
  onCountryChange,
  error = "",
  required = false,
  disabled = false,
  id = "mobile-number",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus search input on open
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Filter countries by name, code, or dial code
  const filteredCountries = countries.filter((c) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.dialCode.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q)
    );
  });

  const handleSelectCountry = (country) => {
    onCountryChange(country);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`flex items-center rounded-xl border bg-paper focus-within:bg-white focus-within:border-teal transition-colors ${
          error ? "border-rose-500 bg-rose-50/20" : "border-border"
        }`}
      >
        {/* Country Code Dropdown Trigger */}
        <button
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-medium text-ink hover:bg-black/5 rounded-l-xl border-r border-border shrink-0 transition-colors focus-ring disabled:opacity-60 disabled:pointer-events-none"
          title={`Country: ${selectedCountry.name} (${selectedCountry.dialCode})`}
        >
          <span className="text-xl leading-none select-none" role="img" aria-label={selectedCountry.name}>
            {selectedCountry.flag}
          </span>
          <span className="font-mono text-xs text-ink-soft font-semibold">
            {selectedCountry.dialCode}
          </span>
          <ChevronDown
            size={14}
            className={`text-ink-soft transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Mobile Number Input */}
        <input
          id={id}
          type="tel"
          disabled={disabled}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={selectedCountry.code === "IN" ? "98765 43210" : "Mobile number"}
          className="w-full bg-transparent px-3.5 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:outline-hidden disabled:opacity-60"
        />
      </div>

      {/* Error text */}
      {error && (
        <p className="mt-1.5 text-xs text-rose-600 font-medium flex items-center gap-1">
          <span>{error}</span>
        </p>
      )}

      {/* Floating Country List Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-50 left-0 mt-1.5 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-white shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {/* Search Box */}
          <div className="p-2.5 border-b border-border bg-paper/60 flex items-center gap-2">
            <Search size={14} className="text-ink-soft shrink-0 ml-1" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or code (e.g. India, +91)..."
              className="w-full bg-transparent text-xs text-ink placeholder:text-ink-soft/60 focus:outline-hidden py-1"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="p-1 text-ink-soft hover:text-ink rounded-full hover:bg-black/5"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Country Items */}
          <div className="max-h-64 overflow-y-auto divide-y divide-border/40 scrollbar-thin">
            {filteredCountries.length === 0 ? (
              <div className="p-4 text-center text-xs text-ink-soft">
                No matching country found
              </div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = selectedCountry.code === c.code && selectedCountry.dialCode === c.dialCode;
                return (
                  <button
                    key={`${c.code}-${c.dialCode}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectCountry(c)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs transition-colors hover:bg-teal/10 ${
                      isSelected ? "bg-teal/15 font-semibold text-primary" : "text-ink"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <span className="text-lg leading-none shrink-0" role="img" aria-label={c.name}>
                        {c.flag}
                      </span>
                      <span className="truncate">{c.name}</span>
                      {c.isPrimary && (
                        <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-teal/15 text-teal font-mono uppercase tracking-wider font-semibold">
                          Primary
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-ink-soft font-medium shrink-0 ml-2">
                      {c.dialCode}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
