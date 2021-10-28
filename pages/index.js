
import cn from "classnames";
import axios from "axios";

export default function Home({}) {
  return (
    <div>
      
    </div>
  );
}


export async function getServerSideProps(context) {
  const houzezResponse = await axios.get(
    "https://ea50086b-af54-4718-ab27-001ee37d4e28.mock.pstmn.io/houzez"
  );
  

  

  

  const houzez = houzezResponse.data.data || [];
  
  return {
    props: {
      houzez: houzez,
     
    }, // will be passed to the page component as props
  };
}
