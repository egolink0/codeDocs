import "@code-hike/mdx/dist/index.css";
import LeftMenu from "./LeftMenu";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <LeftMenu />
      </aside>
      <article>
        <Component {...pageProps} />
      </article>
    </div>
  );
}

export default MyApp;
