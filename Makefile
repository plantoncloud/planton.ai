# Makefile for Next.js project

YARN := yarn

.PHONY: deps install build run dev devs clean

deps: install

install:
	$(YARN) install

build: install
	$(YARN) build

# Development server
devs: run
	
# Alias for convenience
dev: run

run:
	$(YARN) dev

clean:
	rm -rf .next node_modules .yarn dist out .pnp.cjs .pnp.loader.mjs
