import { time } from "console";
import { rule } from "postcss";
import { title } from "process";
import { defineField, defineType } from "sanity";

export default defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "Keep the title relative to the product",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "array",
            of: [{ type: "reference", to: { type: "category"}}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "ratings",
            title: "Ratings",
            type: "number",
            description: "Ratings must be equal or below 5"
        }),
        defineField({
            name: "newarrivals",
            title: "New Arrivals",
            type: "boolean",
        }),
        defineField({
            name: "position",
            title: "Position",
            type: "string",
        }),
        defineField({
            name: "brand",
            title: "Brand",
            type: "string",
        }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
            position: "position",
        },
    },
});