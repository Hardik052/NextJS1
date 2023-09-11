import Link from 'next/link';

import {useRouter} from 'next/router';

function ClientIndex(){

  const router = useRouter();
  function LoadProjectButton(){

    // load data and when done, navigate away
    router.push('/portfolio/max');

  }
  const clients = [
    {id: "max", name: "Maxwell"},
    {id: "mitch", name: "Johnson"}
  ]
  return (
    <div>
      <h1>Client Home Page</h1>
      <ul>
        {clients.map((client)=> (
          <li><Link href = {`/clients/${client.id}`}>{client.name}</Link></li>
        ))}

      </ul>
      <button onClick={LoadProjectButton}>Click here to Load portfolio L !</button>
    </div>
  )

}
export default ClientIndex;