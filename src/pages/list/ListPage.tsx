import { FC, useState } from "react";
import Edit from "./Edit";
import List from "./List";

import styles from "./List.module.css";

interface ListPageProps {}

const ListPage: FC<ListPageProps> = () => {
  const [page, setPage] = useState({
    name: "",
    page: 0,
  }); // 1 edit personas or 2 edit coches | 0 to defult list

  return (
    <div className={styles.container}>
      {page.page === 0 ? (
        <List setPage={setPage} />
      ) : (
        <Edit page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default ListPage;
