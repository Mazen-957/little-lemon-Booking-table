import "./styles.css";
import BookingForm from "./BookingForm";

export default function App() {
  return (
    <>
      <header className="header">
        <h1>🍋 Little Lemon Restaurant</h1>
        <p>Chicago's best Mediterranean food</p>
      </header>

      <main className="main-content">
        <h2 style={{ textAlign: "center" }}>Reserve a Table</h2>
        {/* هنا بنعرض كومبوننت الفورم */}
        <BookingForm />
      </main>

      <footer className="footer">
        <p>© 2026 Little Lemon. All rights reserved.</p>
      </footer>
    </>
  );
}
