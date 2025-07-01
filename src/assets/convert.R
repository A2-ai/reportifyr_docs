# install.packages("here")

# Load library
library(tools)

# Define directories
rd_dir <- here::here("packages", "reportifyr", "man")
html_dir <- here::here("projects_internal", "reportifyr_docs", "public", "html_files")

if (!dir.exists(html_dir)) {
  dir.create(html_dir, recursive = TRUE)
}

rd_files <- list.files(rd_dir, pattern = "\\.Rd$", full.names = TRUE)

# Convert each .Rd file to HTML
for (rd_file in rd_files) {
  output_file <- file.path(html_dir, paste0(tools::file_path_sans_ext(basename(rd_file)), ".html"))
  
  Rd2HTML(rd_file, out = output_file)
  
  message("Converted: ", rd_file, " -> ", output_file)
}

message("All .Rd files have been converted to .html.")


