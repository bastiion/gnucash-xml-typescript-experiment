{
  description = "Flake for the gnucash web project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-21.11";
    flake-utils.url = "github:numtide/flake-utils";
    xgen-pkgs.url = "github:bastiion/xgen";
  };
  outputs = { self, nixpkgs, flake-utils, xgen-pkgs }:
    flake-utils.lib.eachDefaultSystem (system:
    let 
      pkgs = nixpkgs.legacyPackages.${system};
      xgen = xgen-pkgs.packages.${system}.xgen;
    in
      rec {
        packages = flake-utils.lib.flattenTree rec {

          gnucashRNC = pkgs.fetchurl {
            name = "gnucash.rnc";
            url = "https://raw.githubusercontent.com/Gnucash/gnucash/7f316b8bdd1e511eef7d654a0169031c12a9b651/libgnucash/doc/xml/gnucash-v2.rnc";
            sha256 = "sha256-5Pi3ooDY0+SEBfYj5mW1IV9ke5ta21wvbmDFaOsn3sI=";
          };

          gnucashXSD = pkgs.runCommand "gnucash-xsd" {
            buildInputs = with pkgs; [ jing ];
          } ''
            mkdir -p $out
            ${pkgs.jing}/bin/trang -I rnc -O xsd ${gnucashRNC} $out/gnucash-v2.xsd
          '';
          gnucashFastXMLTypes = pkgs.runCommand "gnucash-fast-xml-types" {
            buildInputs = [ xgen ];
          } ''
            mkdir -p $out
            cd $out
            ${xgen}/bin/xgen -i ${gnucashXSD}/gnucash-v2.xsd -o gnucash-v2 -l TypeScript
            mv gnucash-v2/${gnucashXSD}/* .
            rm -r gnucash-v2
            '';
        };
        devShell = pkgs.mkShell {
            buildInputs = with pkgs; [ jing xgen ];
        };
        defaultPackage = packages.gnucashFastXMLTypes;
      }
    );
}
