import cn from "classnames";
import axios from "axios";
import BlackNavbar from "../src/components/BlackNavbar";
import BlueNavbar from "../src/components/BlueNavbar";

export default function Home({}) {
  return (
    <div>
      {/* //here is the first navbar black navbar */}
      <section>
        <BlackNavbar />
      </section>
 {/* //here is the second navbar blue navbar */}
      <section>
        <BlueNavbar />
      </section>
    </div>
  );
}

// // export async function getServerSideProps(context) {
// //   const houzezResponse = await axios.get(
// //     "https://8b7d0628-947c-4c7a-b442-32304eac7557.mock.pstmn.io/houzez"
// //   );

// //   const houzez = houzezResponse.data.data || [];

// //   return {
// //     props: {
// //       houzez: houzez,

// //     }, // will be passed to the page component as props
//   };
// }
