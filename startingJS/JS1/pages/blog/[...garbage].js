import { useRouter } from "next/router";
function Garbage(){
  const router = useRouter()
  console.log(router.query);
  return(
    <div>
      <h1>SLug</h1>

    </div>

  );

}

export default Garbage;