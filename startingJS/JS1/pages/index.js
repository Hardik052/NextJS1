import Link from 'next/link';
function index(){
 return(
  <div>
    <h1>Home Page</h1>
    <ul>

      <li>
        <Link href="/about">About us</Link>

      </li>
      <li>
        <Link href="/clients">Client</Link>
      </li>
    </ul>
  </div>
 );
}

export default index;
