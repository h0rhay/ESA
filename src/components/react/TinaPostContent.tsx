import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { PostQuery } from "../../../tina/__generated__/types";

interface Props {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

export default function TinaPostContent(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const  { title, body } = data.post
  return (
    <>
      <h1 data-tina-field={tinaField(data.post, "title")}>
        {title}
      </h1>
      <div data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown content={body} />
      </div>
    </>
  );
} 