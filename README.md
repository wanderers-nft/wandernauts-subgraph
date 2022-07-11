# wandernauts-subgraph
Subgraph for Wandernauts

[Generating, compiling, publishing the subgraph](https://docs.openzeppelin.com/subgraphs/0.1.x/generate#generate_schema_and_manifest)

## Generating
```sh
npx graph-compiler \
  --config source.json \
  --include node_modules/@wanderers/subgraphs/src/datasources \
  --export-schema \
  --export-subgraph
  ```

## Build & deploy
```sh
npx graph-cli codegen generated/wandernauts.subgraph.yaml
npx graph-cli build generated/wandernauts.subgraph.yaml
npx graph-cli deploy                      \
  --ipfs https://api.thegraph.com/ipfs/   \
  --node https://api.thegraph.com/deploy/ \
  username/subgraphname                   \
  generated/wandernauts.subgraph.yaml
```