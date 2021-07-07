import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const ProfileLink = (props) => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Index = (props) => (
  <Layout>
    <h1>Friends List </h1>
    {/* {props.profiles.map((profile, index) => (
      <ProfileLink key={index} profile={profile} />
    ))} */}

    <ProfileLink profile="hyojin" />
    <ProfileLink profile="sangjo" />
    <ProfileLink profile="chunsik" />
  </Layout>
);

// Index.getInitialProps = async function () {
//   var xhr = new XMLHttpRequest();
//   var url =
//     "http://openapi.jbfood.go.kr:8080/openapi/service/JeonbukFoodService/getJeonbukFood"; /*URL*/
//   var queryParams =
//     "?" + encodeURIComponent("ServiceKey") + "=" + "서비스키"; /*Service Key*/
//   queryParams +=
//     "&" + encodeURIComponent("Area") + "=" + encodeURIComponent("01"); /**/
//   xhr.open("GET", url + queryParams);
//   xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//       alert(
//         "Status: " +
//           this.status +
//           "nHeaders: " +
//           JSON.stringify(this.getAllResponseHeaders()) +
//           "nBody: " +
//           this.responseText
//       );
//     }
//   };

//   xhr.send("");

//   const res = await fetch(url);
//   const data = await res.json();

//   return {
//     profiles: data.map((profile) => profile.name),
//   };
// };

export default Index;
