import TopNav from "./TopNav";

function Layout({ children }) {
  return (
    <div>
      <TopNav />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
