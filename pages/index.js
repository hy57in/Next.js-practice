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

const Index = () => (
  <Layout>
    <h1>Friends List {props.profiles[0]}</h1>
    {props.profiles.map((profile, index) => (
      <ProfileLink key={index} profile={profile} />
    ))}

    <ProfileLink profile="hyojin" />
    <ProfileLink profile="sangjo" />
    <ProfileLink profile="chunsik" />
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch("https://uinames.com/api/?amount=10");
  const data = await res.json();

  return {
    profiles: data.map((profile) => profile.name),
  };
};

export default Index;
