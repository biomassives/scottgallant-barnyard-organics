import { Template } from "tinacms"

const FeedProductTemplate: Template = {
  name: "feed",
  label: "Feed product",
  ui: {
    defaultItem: {
      title: "",
      layout: "feed",
    }
  },
  fields: [
    {
      name: "layout",
      label: "Layout",
      type: "string",
    },
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "date",
      label: "Date",
      type: "datetime",
    },
    {
      name: "description",
      label: "Description",
      type: "string",
      ui: {
        component: "textarea"
      },
    },
    {
      name: "ingredients",
      label: "Ingredients",
      type: "string",
      ui: {
        component: "textarea"
      },
    },
    {
      name: "directions",
      label: "Directions",
      type: "string",
      ui: {
        component: "textarea"
      },
    },
    {
      name: "general_analysis",
      label: "General analysis",
      type: "string",
      ui: {
        component: "textarea"
      },
    },
    {
      name: "analysis_table",
      label: "Analysis table",
      type: "object",
      list: true,
      fields: [
        {
          name: "nutrients",
          label: "Nutrients",
          type: "string",
        },
        {
          name: "quantity",
          label: "Quantity",
          type: "string",
        }
      ],
    },
    {
      name: "product_photos",
      label: "Product photos",
      type: "string",
      list: true,
    }
  ]
}

export default FeedProductTemplate;