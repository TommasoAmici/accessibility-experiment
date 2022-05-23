library("RSQLite")
library("ggplot2")

## connect to db
con <- dbConnect(
  drv = RSQLite::SQLite(),
  dbname = "/Users/tamici/Documents/uva/uva-thesis/experiment/experiment.sqlite3",
)

## boxplot of web vitals
web_vitals <- dbGetQuery(
  conn = con,
  statement = "SELECT * FROM webVitals wv WHERE metric IN ('FCP', 'LCP', 'FID', 'CLS', 'TTFB')",
)

chart <- ggplot(web_vitals) +
  geom_boxplot(aes(x = metric, y = value)) +
  labs(x = "Metric", y = "Milliseconds")

ggsave("/Users/tamici/Documents/uva/uva-thesis/images/web-vitals.pdf", plot = chart, width = 6, height = 4)

## boxplot of nextjs metrics
nextjs_metrics <- dbGetQuery(
  conn = con,
  statement = "SELECT * FROM webVitals wv WHERE metric NOT IN ('FCP', 'LCP', 'FID', 'CLS', 'TTFB')",
)

chart <- ggplot(nextjs_metrics) +
  geom_boxplot(aes(x = metric, y = value)) +
  labs(x = "Metric", y = "Milliseconds")

ggsave("/Users/tamici/Documents/uva/uva-thesis/images/nextjs-metrics.pdf", plot = chart, width = 6, height = 4)
