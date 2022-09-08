import { useEffect, useState } from "react";
import ListPage from "./pages/list/ListPage";
import EmptyPage from "./pages/empty/Empty";

import "./styles/bases.css";
import "./styles/layout.css";
import "./styles/App.css";

import Layout from "./layout/Layout";
import useData from "./hooks/useData";
import { DataContextProps } from "./utils/interfaces";

function App() {
  const [page, setPage] = useState(0);
  const { data } = useData() as DataContextProps;
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    let number = 0;
    if (data && (data?.personas.length > 0 || data?.coches.length > 0))
      number = 1;
    else number = 2;
    setPage(number);
  }, [data]);
  return (
    <Layout menu={openMenu} setMenu={setOpenMenu} page={page}>
      {/* routes : */}
      {!page ? (
        <Loading />
      ) : page === 1 ? (
        <ListPage />
      ) : (
        <EmptyPage setOpenMenu={setOpenMenu} />
      )}
    </Layout>
  );
}

const Loading = () => {
  return <div className="loading"></div>;
};

export default App;
