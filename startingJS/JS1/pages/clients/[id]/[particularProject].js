import { useRouter } from "next/router";

function DynamicProject(){
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return(
    <div>
      <h1> particular client's particular project</h1>

    </div>

  );

}

export default DynamicProject;