import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/post/addPost">
              <a>Add Post</a>
            </Link>
          </li>
          <li>
            <Link href="/post/obed">
              <a>postId</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
