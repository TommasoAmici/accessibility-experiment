build:
	latexmk -bibtex -pdf -dvi- main.tex

clean:
	rm *.aux *.bbl *.bcf *.blg *.fdb_latexmk *.fls *.lof *.log *.lot *.tdo *.toc *.run.xml *.pdf
