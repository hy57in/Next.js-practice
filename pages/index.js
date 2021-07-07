import Layout from "../components/Layout";
import Link from "next/link";

const ProfileLink = (props) => (
  <div>
    <Link href={`/profile?name=${props.name}`}>
      <a>Go to {props.name}'s profile</a>
    </Link>
  </div>
);

const Index = () => (
  <Layout>
    <h1>Friends List</h1>
    <ProfileLink name="hyojin" />
    <ProfileLink name="sangjo" />
    <ProfileLink name="chunsik" />
  </Layout>
);

export default Index;
