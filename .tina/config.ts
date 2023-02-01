import { defineConfig } from "tinacms";
import FeedCollection from "./feedProduct";
import DefaultTemplate from "./pageTemplates/default";
import DefaultPDFTemplate from "./pageTemplates/defaultPdf";
import FaqTemplate from "./pageTemplates/faq";
import GridTemplate from "./pageTemplates/grid";
import HomePageTemplate from "./pageTemplates/home";
import FooterTemplate from "./siteDataTemplates/footer";
import OrderFormTemplate from "./siteDataTemplates/orderForm";
import RetailersTemplate from "./siteDataTemplates/retailers";
import ShoppingRatesTemplate from "./siteDataTemplates/shoppingRates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "tina";

export default defineConfig({
  branch,
  clientId: 'e8bcc601-fdd3-4f37-8152-6a3f68abfdbb',   // Get this from tina.io
  token: process.env.TINA_TOKEN,      // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "/",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "/",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "_pages",
        format: "md",
        templates: [
          HomePageTemplate,
          DefaultTemplate,
          DefaultPDFTemplate,
          GridTemplate,
          FaqTemplate,
        ]
      },
      FeedCollection,
      {
        name: "data",
        label: "Site Data",
        path: "_data",
        format: "json",
        templates: [
          FooterTemplate,
          OrderFormTemplate,
          RetailersTemplate,
          ShoppingRatesTemplate,
        ]
      },
    ],
  },
});
