import Link from "next/link";
import { getCurrentDirs } from "./utils";

function LeftMenu({}) {
  const paths = getCurrentDirs();
  return (
    <ul>
      {paths?.map((item) => (
        <li key={item.name}>
          <Link
            href={{
              pathname: item.link,
            }}
          >
            <a>{item.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LeftMenu;
