# ytd

[![JSR](https://jsr.io/badges/@kj-9/ytd)](https://jsr.io/@kj-9/ytd)

youtube data api cli tool and library for deno.

## Installation

### Standalone binary

- Download standalone binary from
  [releases](https://github.com/kj-9/ytd/releases).
- Move downloaded file to path
- Or you can download source code and compile on your own.

### with Deno

```sh
deno install --allow-net -g -n ytd https://jsr.io/@kj-9/ytd/0.0.0-a2/src/cli.ts
```

## Usage

```sh
Usage:   ytd <playlistId> <apiKey>
Version: 0.0.0-a                  

Description:

  Youtube Data API CLI and library for Deno

Options:

  -h, --help     - Show this help.                            
  -V, --version  - Show the version number for this program.  
  -d, --debug    - Enable debug output.
```

## Release

- bump version in `deno.json`
- run `deno task test-update` to update snapshot tests if needed
- create and push a tag
