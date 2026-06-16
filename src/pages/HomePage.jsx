import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import SuperGianteTitle from "../components/SuperGiantTitle";
import Layout from "../Layout";

export default function HomePage() {
    return <Layout>
        <PageTitle title="Home" />

        <SuperGianteTitle title="Oferta Black Friday!" />

        <Link to="/posts">Posts</Link>
    </Layout>
}
