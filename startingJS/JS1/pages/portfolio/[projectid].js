import {useRouter} from 'next/router'

function PortfolioProjectPage(){
  const router = useRouter();

  console.log(router.pathname)
  console.group(router.query)
  return(
    <div>
      <h1> Particular portfolio projet page !</h1>
    </div>

  );

}

export default PortfolioProjectPage;