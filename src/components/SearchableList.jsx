import { useState, useMemo } from "react";

const ITEMS = [
  { id: 1, name: "MacBook Pro 16\"", category: "Electronics", status: "In Stock", price: 2499 },
  { id: 2, name: "Wireless Headphones", category: "Electronics", status: "Low Stock", price: 199 },
  { id: 3, name: "Standing Desk", category: "Furniture", status: "In Stock", price: 599 },
  { id: 4, name: "Ergonomic Chair", category: "Furniture", status: "Out of Stock", price: 849 },
  { id: 5, name: "USB-C Hub", category: "Electronics", status: "In Stock", price: 79 },
  { id: 6, name: "Monitor 4K", category: "Electronics", status: "In Stock", price: 1299 },
  { id: 7, name: "Desk Lamp", category: "Furniture", status: "Low Stock", price: 45 },
  { id: 8, name: "Mechanical Keyboard", category: "Electronics", status: "In Stock", price: 159 },
  { id: 9, name: "Notebook Set", category: "Stationery", status: "In Stock", price: 24 },
  { id: 10, name: "Whiteboard", category: "Stationery", status: "Out of Stock", price: 89 },
  { id: 11, name: "Cable Management Kit", category: "Electronics", status: "In Stock", price: 35 },
  { id: 12, name: "Bookshelf", category: "Furniture", status: "In Stock", price: 299 },
];

const CATEGORIES = ["All", ...new Set(ITEMS.map((i) => i.category))];
const STATUSES = ["All", "In Stock", "Low Stock", "Out of Stock"];

const statusStyle = {
  "In Stock":    { bg: "#d1fae5", color: "#065f46" },
  "Low Stock":   { bg: "#fef3c7", color: "#92400e" },
  "Out of Stock":{ bg: "#fee2e2", color: "#991b1b" },
};

export default function SearchableList() {
  const [query, setQuery]       = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus]     = useState("All");
  const [sortBy, setSortBy]     = useState("name");

  const filtered = useMemo(() => {
    return ITEMS
      .filter((item) => {
        const matchesQuery =
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === "All" || item.category === category;
        const matchesStatus   = status === "All"   || item.status === status;
        return matchesQuery && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        return a.name.localeCompare(b.name);
      });
  }, [query, category, status, sortBy]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setStatus("All");
    setSortBy("name");
  };

  const hasActiveFilters = query || category !== "All" || status !== "All";

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Inventory</h1>
        <p style={styles.subtitle}>{filtered.length} of {ITEMS.length} items</p>
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        {/* Search */}
        <div style={styles.searchWrapper}>
          <span style={styles.searchIcon}>⌕</span>
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Search items..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button style={styles.clearBtn} onClick={() => setQuery("")}>✕</button>
          )}
        </div>

        {/* Filters row */}
        <div style={styles.filtersRow}>
          <select style={styles.select} value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>

          <select style={styles.select} value={status} onChange={(e) => setStatus(e.target.value)}>
            {STATUSES.map((s) => <option key={s}>{s}</option>)}
          </select>

          <select style={styles.select} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Sort: Name</option>
            <option value="price-asc">Sort: Price ↑</option>
            <option value="price-desc">Sort: Price ↓</option>
          </select>

          {hasActiveFilters && (
            <button style={styles.resetBtn} onClick={clearFilters}>
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div style={styles.list}>
        {filtered.length === 0 ? (
          <div style={styles.empty}>
            <span style={{ fontSize: 40 }}>🔍</span>
            <p style={{ margin: "8px 0 0", color: "#6b7280" }}>No items match your search</p>
          </div>
        ) : (
          filtered.map((item, i) => (
            <div
              key={item.id}
              style={{
                ...styles.card,
                animationDelay: `${i * 30}ms`,
              }}
            >
              <div style={styles.cardLeft}>
                <div style={styles.cardAvatar}>
                  {item.name[0]}
                </div>
                <div>
                  <div style={styles.cardName}>{item.name}</div>
                  <div style={styles.cardCategory}>{item.category}</div>
                </div>
              </div>
              <div style={styles.cardRight}>
                <span
                  style={{
                    ...styles.badge,
                    background: statusStyle[item.status].bg,
                    color: statusStyle[item.status].color,
                  }}
                >
                  {item.status}
                </span>
                <span style={styles.price}>${item.price.toLocaleString()}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        input:focus { outline: none; }
        select:focus { outline: none; }
        button:hover { opacity: 0.85; }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    minHeight: "100vh",
    background: "#f8f7f4",
    padding: "48px 24px",
    maxWidth: 720,
    margin: "0 auto",
    boxSizing: "border-box",
  },
  header: {
    marginBottom: 32,
    display: "flex",
    alignItems: "baseline",
    gap: 16,
  },
  title: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 42,
    fontWeight: 800,
    margin: 0,
    color: "#111827",
    letterSpacing: "-1px",
  },
  subtitle: {
    margin: 0,
    color: "#9ca3af",
    fontSize: 15,
    fontWeight: 400,
  },
  controls: {
    marginBottom: 28,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    border: "1.5px solid #e5e7eb",
    borderRadius: 12,
    padding: "0 14px",
    gap: 8,
    transition: "border-color .2s",
  },
  searchIcon: {
    fontSize: 22,
    color: "#9ca3af",
    lineHeight: 1,
    userSelect: "none",
  },
  searchInput: {
    flex: 1,
    border: "none",
    background: "transparent",
    padding: "14px 0",
    fontSize: 15,
    color: "#111827",
    fontFamily: "'DM Sans', sans-serif",
  },
  clearBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#9ca3af",
    fontSize: 14,
    padding: 4,
  },
  filtersRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
  },
  select: {
    background: "#fff",
    border: "1.5px solid #e5e7eb",
    borderRadius: 10,
    padding: "10px 14px",
    fontSize: 14,
    color: "#374151",
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    appearance: "none",
    WebkitAppearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239ca3af' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    paddingRight: 32,
  },
  resetBtn: {
    background: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "10px 16px",
    fontSize: 14,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  card: {
    background: "#fff",
    border: "1.5px solid #e5e7eb",
    borderRadius: 14,
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    animation: "slideIn 0.25s ease both",
    transition: "border-color .2s, box-shadow .2s",
  },
  cardLeft: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  cardAvatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "#111827",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 18,
    flexShrink: 0,
  },
  cardName: {
    fontWeight: 500,
    fontSize: 15,
    color: "#111827",
  },
  cardCategory: {
    fontSize: 13,
    color: "#9ca3af",
    marginTop: 2,
  },
  cardRight: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  badge: {
    padding: "4px 10px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  price: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 16,
    color: "#111827",
    minWidth: 70,
    textAlign: "right",
  },
  empty: {
    textAlign: "center",
    padding: "64px 0",
    color: "#6b7280",
  },
};
