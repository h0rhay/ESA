import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { PageQuery } from "../../../tina/__generated__/types";

interface Props {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}

export default function TinaPageContent(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  return (
    <div data-tina-field={tinaField(data.page, "body")}>
      <TinaMarkdown content={content} />
    </div>
  );
} 