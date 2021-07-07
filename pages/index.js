import Layout from "../components/Layout";
import Link from "next/link";

const ProfileLink = (props) => (
  <div>
    <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
      <a>Go to {props.profile}'s profile</a>
    </Link>
  </div>
);

const Index = () => (
  <Layout>
    <h1>Friends List</h1>
    <ProfileLink profile="hyojin" />
    <ProfileLink profile="sangjo" />
    <ProfileLink profile="chunsik" />
  </Layout>
);

export default Index;
