import { FieldCollection } from "@tinacms/schema-tools/dist/types"

const FeedCollection: FieldCollection = {
  name: "feed",
  label: "Feed Products",
  path: "_feed-products",
  format: "md",
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
      required: true,
      ui: {
        component: () => null,
      }
    },
    {
      name: "title",
      label: "Title",
      type: "string",
      isTitle: true,
      required: true,
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
      ui: {
        itemProps: (item) => ({ label: item.nutrients }),
      },
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
      type: "object",
      list: true,
      fields: [
        {
          name: "image",
          label: "Image",
          type: "image",
        }
      ]
    }
  ]
}

export default FeedCollection;
