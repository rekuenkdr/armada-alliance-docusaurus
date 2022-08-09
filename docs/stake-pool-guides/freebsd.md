# FreeBSD OS

Thanks to cardanobsd.org getting a Cardano relay setup is a very easy task! In fact, if you have a working FreeBSD 13.1 installation ( AMD64 OR ARM64 ) this task can take under 5 minutes!

If you do not have a FreeBSD server ready to go, here are a few options ( allocate 4 cores, 16GB RAM and 150GB+ SSD ):

Install bare-metal on your own server: https://docs.freebsd.org/en/books/handbook/bsdinstall/
Deploy a ready-to-go cloud image, the "t4g.xlarge" ARM instance will be enough for a single relay: https://aws.amazon.com/marketplace/pp/prodview-csz7hkwk5a4ls
 
Deploy cardano-node software: 
Login to server via ssh and become root by entering: su
Download the cardano-node packages from:
      AMD64: https://cardanobsd.org/files/bin/amd64/hs-cardano-node-1.35.2.pkg 
      sha256: cf6be5fd26cb0e5b6c007385b09c168e509c3fd86e30385fa12b9456971673ab
            ARM64: https://cardanobsd.org/files/bin/aarch64/hs-cardano-node-1.35.2.pkg
            sha256: be62060f0a8e9cd345c9f620121fc55d1783386fac170584fa501742e86f0f30

            AMD64: https://cardanobsd.org/files/bin/amd64/hs-cardano-node-1.35.3-rc1.pkg 
            sha256: 4918c89eae60021cc00eec1f1e8d0e288dc4dd2b88ba68d0617c4eba366f07bd

            ARM64: https://cardanobsd.org/files/bin/aarch64/hs-cardano-node-1.35.3-rc1.pkg
            sha256: e43be664d949145001ebf1a619505848c9eab151baf0d39dcbb6decd74858235

            Example: fetch https://cardanobsd.org/files/bin/amd64/hs-cardano-node-1.35.2.pkg 
            Verify sha256sum is same as above: sha256sum hs-cardano-node-1.35.2.pkg

Install the cardano-node package + other software:
      pkg install ./hs-cardano-node-1.35.2.pkg
      pkg install nano git portmaster
 
Enable the cardano-node service:
      Add entries to /etc/rc.conf by running:

      Required ( defaults to port 6000 on mainnet ):
      sysrc cardano_node_enable="YES"

      Some other options you can pick:
      sysrc cardano_node_port="3001"
      sysrc cardano_node_net="mainnet"
            You can find more options under: /usr/local/etc/rc.d/cardano_node 

       If there are issues running cardano-node with missing / incorrect libraries, see note on bottom of the page RE: switching to LATEST.

Run the setup script ( it will download config files ):
       service cardano_node onefetch
 
Start your cardano-node service:
       service cardano_node start
 
        All the config files, db, etc are located at: /var/db/cardano_node/  
        Logs are located at: /var/db/cardano_node/logs/

        
        Because the node runs in it's own jail, If you modify the config file, specify a file path under /logs in config.json
 

    This is it! Now you have a working cardano-node relay on FreeBSD! Congrats! 

    If you need additional help, join our Discord via link available on cardanobsd.org

 

      Switching to LATEST branch ( if you find issues with libraries ):
      mkdir -p /usr/local/etc/pkg/repos

      cp /etc/pkg/FreeBSD.conf /usr/local/etc/pkg/repos/FreeBSD.conf

      nano /usr/local/etc/pkg/repos/FreeBSD.conf # Add following code into that file:

FreeBSD: {
    url: "pkg+http://pkg.FreeBSD.org/${ABI}/latest",
    mirror_type: "srv",
    signature_type: "fingerprints",
    fingerprints: "/usr/share/keys/pkg",
    enabled: yes
}
         Then run: pkg update -f

 

      If you want to build from source instead:
       portsnap fetch extract

       git clone -b cardano https://github.com/freebsd/freebsd-ports-haskell.git

       cp -R ./freebsd-ports-haskell/net-p2p/cardano-node /usr/ports/net-p2p/cardano-node

       portmaster -fR /usr/ports/net-p2p/cardano-node

       ( accept all default or pick what you need from every port config option )