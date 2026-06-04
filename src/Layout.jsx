import Navbar from "./Navbar";
import PageFooter from "./PageFooter"

export default function Layout({children}) {
    return (
        <div>
            <Navbar />

            <main className="container">
                <div className="row">
                    <div className="col">
                        { children }
                    </div>
                </div>
            </main>

            <PageFooter />
        </div>
    )
}
