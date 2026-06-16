import PageTitle from "../components/PageTitle";
import Layout from "../Layout";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return <Layout>
        <PageTitle title="Register" />

        <p>Si ya tienes una cuenta <Link to="/login">click aquí</Link> para ingresar</p>
    </Layout>
}
