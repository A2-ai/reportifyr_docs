// @ts-check
import { defineConfig } from 'astro/config';
import { starlightKatex } from "starlight-katex";
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: "https://a2-ai.github.io/reportifyr_docs/",
	base: "/reportifyr_docs",
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          content: {
            type: 'element',
            tagName: 'svg',
            properties: {
              className: ['heading-anchor'],
              style: 'display: inline-block; margin-left: 0.5rem;',
              viewBox: '0 0 16 16',
              width: 16,
              height: 16,
            },
            children: [
              {
                type: 'element',
                tagName: 'path',
                properties: {
                  fill: 'currentColor',
                  d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
                },
              },
            ],
          },
        },
      ],
    ],
  },
  integrations: [
    starlight({
      plugins: [starlightKatex()],
      customCss: [
        './src/styles/custom.css',
      ],
      title: 'reportifyr documentation',
      social: {
        github: 'https://github.com/a2-ai-tech-training/reportifyr_docs',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: "Intro to reportifyr", slug: 'guides/intro' },
            { label: "reportifyr's New User Guide", slug: 'guides/new_user_guide' },
            { label: "Initializing reportifyr", slug: 'guides/initializing_reportifyr' },
            { label: "Performing Analyses", slug: 'guides/performing_analyses' },
            { label: "Drafting Reports", slug: 'guides/drafting_reports' },
            { label: "A Streamlined Workflow", slug: 'guides/streamlined_workflow' },
            { label: "Updating Reports", slug: 'guides/updating_reports' },
            { label: "Elective Footnotes", slug: 'guides/elective_footnotes' },
          ],
        },
        {
          label: 'References',
          collapsed: true,
          items: [
            { label: "reportifyr's Function References", slug: 'reference/reportifyr' },
            {
              label: 'Setup',
              collapsed: true,
              items: [
                'reference/setup/setup',
                'reference/setup/initialize_report_project',
                'reference/setup/initialize_python',
              ],
            },
            {
              label: 'Exporting',
              collapsed: true,
              items: [
                'reference/exporting/exporting',
                'reference/exporting/format_flextable',
                'reference/exporting/ggsave_with_metadata',
                'reference/exporting/save_rds_with_metadata',
                'reference/exporting/write_csv_with_metadata',
              ],
            },
            {
              label: 'Metadata',
              collapsed: true,
              items: [
                'reference/metadata/metadata',
                'reference/metadata/get_meta_abbrevs',
                'reference/metadata/get_meta_type',
                'reference/metadata/preview_metadata',
                'reference/metadata/preview_metadata_files',
                'reference/metadata/update_object_footnotes',
                'reference/metadata/write_object_metadata',
              ],
            },
            {
              label: 'Document Interacting',
              collapsed: true,
              items: [
                'reference/document_interacting/document_interacting',
                'reference/document_interacting/add_footnotes',
                'reference/document_interacting/add_plots',
                'reference/document_interacting/add_tables',
                'reference/document_interacting/remove_tables_figures_footnotes',
              ],
            },
            {
              label: 'Report Building',
              collapsed: true,
              items: [
                'reference/report_building/report_building',
                'reference/report_building/build_report',
                'reference/report_building/finalize_document',
              ],
            },
            {
              label: 'Utilities',
              collapsed: true,
              items: [
                'reference/utilities/utilities',
                'reference/utilities/make_doc_dirs',
                'reference/utilities/validate_object',
                'reference/utilities/toggle_logger',
              ],
            },
          ],
        },
      ],
    }),
  ],
});
