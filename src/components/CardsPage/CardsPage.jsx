import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import useDebounce from "../../helpers/useDebounce";

import FILTER_CARDS from "../../graphql/query/cards";

import Title from "../Title";
import Form from "../Form";
import CardsList from "../CardsList";

import styles from "./CardsPage.module.scss";

export default function CardsPage() {
  const [query, setQuery] = useState("");

  const [setFilter, receivedData] = useLazyQuery(FILTER_CARDS);

  const { loading, data, error } = receivedData;
  const showError = error || (query === "error" ? "Test error for purposes" : null);

  const debouncedSearchTerm = useDebounce(query, 300);

  useEffect(() => {
    setFilter({
      variables: {
        filter: {
          limit: 10,
          keywords: debouncedSearchTerm,
          types: ["PODCAST"],
        },
      },
    });
  }, [debouncedSearchTerm, setFilter]);

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Title text="Search" />
        <Form value={query} onChange={handleChange} />
        <CardsList
          cards={data?.contentCards?.edges}
          loading={loading}
          error={showError}
        />
      </div>
    </section>
  );
}
