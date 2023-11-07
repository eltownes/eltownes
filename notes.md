## Notes & Refs

<details>
    <summary>Tech Stack</summary><br>

| Thingy          | Sub-Thingy    |                     Version                      |
|:----------------|:--------------|:------------------------------------------------:|
| macOS           | M2 Pro        |                   Sonama 14.0                    |
| Homebrew        |               |                      4.1.17                      |
|                 | git           |                      2.42.0                      |
|                 | python3       |                  3.10 & 3.11.6                   |
|                 | PostgreSQL    |                       14.9                       |
|                 |               |                                                  |
| IntelliJ        | IDEA Ultimate |                     2023.2.3                     |
|                 | Plugins       |        GitHub Copilot, Google Cloud Code         |
|                 |               |                Maven (bundled v3)                |
|                 |               |                       ---                        |
|                 |               |            Tabnine, Add to gitignore             |
|                 |               | Lombok, Maven Helper, Junit 5 Mockito Generator, |
|                 |               |                                                  |
| SDKMAN!         |               |          script: 5.18.2 / native: 0.4.3          |
|                 | Java          |                   17.0.9-zulu                    |
|                 | SpringBoot    |                      3.1.5                       |
|                 |               |                                                  |
| NVM             |               |                      0.39.5                      |  
|                 | Node          |                   20.9.0 (LTS)                   |
|                 | NPM           |                      10.1.0                      |
|                 |               |                                                  |
| Docker Desktop  |               |                       4.25                       |
|                 |               |                                                  |
|                 |               |                                                  |


<details>
    <summary> ----- stack info </summary>    

* TODO:
  * <a href="https://tomcat.apache.org/" target="_blank">Apache Tomcat</a>@9 -> Codeup
  * <a href="https://dev.mysql.com/" target="_blank">MySQL</a>@8.0 -> Codeup

* <a href="https://brew.sh/" target="_blank">Homebrew</a>
  <br>The missing package manager for macOS - <a href="https://formulae.brew.sh/formula/" target="_blank">formulae search</a>.

    * <details>
        <summary> ----- | </summary>

        * <a href="https://git-scm.com/" target="_blank">Git version control system</a>
        * <a href="https://www.python.org/downloads/" target="_blank">Python.org downloads</a>
          <details>
            <summary>Commands</summary>

            ```
            python3 --version          
            which python3
            ```            
          </details>      
      </details>
    
* <a href="https://sdkman.io/" target="_blank">SDKMAN</a>
  <br>Version manager for languages like Java, Kotlin, Scala, and Groovy, as well as build tools like Gradle and Maven.<br>

    * <details>
        <summary> ----- | </summary><br>
      
        * <details>
            <summary>Commands</summary>

            ```
            sdk version
          
            sdk list // q to quit
            sdk list java
            
            sdk install java // latest stable
            sdk install java [tab]
            sdk install java 17-zulu /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
          
            sdk use scala 3.3.1
            
            sdk default scala 3.3.1
          
            sdk current java
            sdk current // all candidates
          
            sdk upgrade springboot // view outdated
            sdk upgrade
          
            sdk uninstall scala 3.3.1    
            ```
          </details>      

        * <details>
            <summary>Java</summary>

            * <a href="https://www.oracle.com/java/technologies/" target="_blank">Oracle Java</a>
            * <a href="https://www.azul.com/downloads/?os=macos&package=jdk#zulu" target="_blank">Azul JDK</a>

            ```
            # --------------------------
            # Without package manager                  
            # List installed java versions
            /usr/libexec/java_home -V                
            # View default java version
            java -version                  
            # Install a java version
            tar -xzf jdk-17_macos-aarch64_bin.tar.gz
            sudo mv <extracted-jdk-dir> /Library/Java/JavaVirtualMachines/                  
            # Remove a java version
            sudo rm -rf /Library/Java/JavaVirtualMachines/<jdk_dir>
            ```          
          </details>    

        * <details>
            <summary>Maven</summary>        

            * <a href="https://maven.apache.org/download.cgi" target="_blank">Apache Maven</a>
          </details>  
      </details>
    
* <a href="https://github.com/nvm-sh/nvm#table-of-contents" target="_blank">Node Version Manager</a>
    <br>Version manager for node.js, designed to be installed per-user, and invoked per-shell.<br>

    * <details>
        <summary> ----- | </summary>

        * <a href="https://nodejs.org/en" target="_blank">Nodejs.org</a>
        * <a href="https://docs.npmjs.com/" target="_blank">NPM</a>

        * <details>
            <summary>Commands</summary>

            ```
            # check installation
            command -v nvm
            nvm -v
            
            nvm ls-remote
          
            nvm install --lts
            nvm ls
            nvm use --lts
            nvm install-latest-npm
                
            node -v
            npm -v
            ```              
          </details>
    
* <a href="https://www.postgresql.org/download/macosx/" target="_blank">PostgreSQL</a>
  <br>Open source relational database system.<br>
    
    * <details>
        <summary> ----- | </summary><br>
        
        * <a href="https://www.postgresql.org/docs/14/app-initdb.html" target="_blank">initdb</a>
        * To start postgresql@14 now and restart at login:<br>
          ```
          brew services start postgresql@14
          ```
        * Iif you don't want/need a background service you can just run:<br>
          ```
          /opt/homebrew/opt/postgresql@14/bin/postgres -D /opt/homebrew/var/postgresql@14
          ```        
      </details>

* <a href="https://www.jetbrains.com/idea/" target="_blank">IntelliJ IDEA</a>
  <br>IDE for Java, Kotlin, Groovy, and Scala with support for frameworks like Spring, Micronaut, and Quarkus.<br>

* <a href="https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh" target="_blank">Angular DevTools</a>
  <br>Chrome extension for debugging and profiling Angular applications.

</details>

</details><br>


<details>
    <summary>.z<...> files</summary>

### * Sites
* <a href="https://zsh.sourceforge.io/" target="_blank">Zsh Official Site on Source Forge</a>
* <a href="https://ohmyz.sh/" target="_blank">Oh My Zsh</a>

### * Which shell

```
echo $SHELL
```
Expected return --> `/bin/zsh`

### * Location of files --> .z[...]

```
ls -ld ~/.z*
```

### * `.zprofile`

**Purpose:**
`.zprofile` is typically used for setting environment variables and
executing commands that should run once for a login shell.
It's similar in purpose to `.bash_profile` in the Bash environment.

**When it's executed:**
This file is sourced (i.e., its contents are executed) when you start
a login shell. A login shell is typically the shell that's started
when you first log in to your system, either from the login screen or
via SSH.

**Common Uses:**
* Setting `PATH` variables.
* Setting environment variables like `JAVA_HOME`, `GOPATH`, etc.
* Starting background services or processes that should run once
  per session.

### * `.zshrc`

**Purpose:** `.zshrc` is used for configurations that apply to
interactive shells. This means settings, aliases, functions, and
other configurations that you'd want every time you open a new
terminal window or tab.

**When it's executed:** This file is sourced every time you start an
interactive Zsh session. If you open a new terminal window or tab,
`.zshrc` gets executed.

**Common Uses:**
* Setting shell options.
* Defining aliases for commonly used commands.
* Setting shell prompts.
* Loading plugins or themes, especially if you're using a
  framework like Oh My Zsh.
* Defining functions for interactive use.

**Execution Order:**
* A new login shell (e.g., first log in to the system):
    * `.zshenv`
    * `.zprofile`
    * `.zshrc`
    * `.zlogin`
* A new interactive non-login shell (e.g., new terminal window or tab)
    * `.zshrc`

</details><br>



<details>
   <summary>PATH</summary>

### * PATH variable

List:
```
echo $PATH | tr ':' '\n'
```

Permanent in `.zprofile`:
```
export PATH="$PATH:/path/to/new/directory"
```

Temporary in terminal:
```
export PATH="$PATH:/path/to/new/directory"
```

To `.zshrc`:
```
echo "export PATH=$PATH:/path/to/new/directory" >> ~/.zshrc
source ~/.zshrc
```

</details><br>



<details>
   <summary>Github SSH</summary>

### * Sites
* <a href="https://github.com/settings/keys" target="_blank">GitHub Keys</a>

### * Commands
```
ls -al ~/.ssh
```
```
ssh-keygen -t ed25519 -C "your_email@example.com"
```
```
pbcopy < ~/.ssh/id_rsa.pub
```

</details><br>



<details>
   <summary>shell prompt</summary>

### * Sites
* <a href="https://zsh-prompt-generator.site/" target="_blank">Zsh Generator</a>

### * Current prompt config
```
echo $PS1
```

### * Other configs
```
PS1="%n@%m %1~ %# "
PS1="%n@%m %d %# "
PS1="%d %# "
```

### * From terminal or a `.z<...>` file
```
PS1pri="%n@%m %1~ %# "
PS1dir="%d %# "
```
Then switch between them with:
```
PS1=$PS1pri
```

</details><br>

<details>
  <summary>Server Choices</summary><br>

* <details>
    <summary>node http server</summary><br>

    ```
    npm install express
    ```
  create `server.js` file:
    ```
    const express = require('express');
    const app = express();
    const port = 8080;
     
    # static files are within public dir
    app.use(express.static('public'));
    
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
    ```
  start the server:
    ```
    node server.js
    ```

   </details>

* <details>
    <summary>python http server</summary><br>

  From within the `index.html` folder:

    ```
    python3 -m http.server 8080
    ```

  To quit: `ctrl c`
  </details>

</details><br>

<details>
   <summary>Quick Refs</summary><br>

* <a href="https://github.com/0nn0/git-basics-cheatsheet" target="_blank">Git Cheat Sheet</a>
* <a href="https://github.com/0nn0/terminal-mac-cheatsheet" target="_blank">Terminal Cheat Sheet</a>
* <a href="https://ss64.com/osx/" target="_blank">macOS command line</a>

</details><br>

---------------------------------------------------------------

<details>
   <summary>Misc</summary><br>

* <details>
    <summary>PDF creation from .* files -> e.g. ChatWithPDF</summary>
      
    ### * Find and copy files in dir to a new dir
    * Set search criteria - find .java files
        ```
        search_criteria=(. -name "*.java" -type f)
        echo ${search_criteria[@]}
        ```        
    * Find the files
        ```
        find \
        "${search_criteria[@]}" -print && \
        echo "Total: $(find "${search_criteria[@]}" | wc -l)"
        ```
    * Copy the files
        ```
        dest_dir=~/knowledge-repo
        ```
        ```
        mkdir -p "$dest_dir"
        ```
        ```  
        find \
        "${search_criteria[@]}" -print0 | \
        xargs -0 -I {} cp {} "$dest_dir/"
        ```

    ### * Combine into pdf
    * Choices
        ```
        file_name=combined
        cat *.java > "$file_name.txt" && \
        textutil -convert docx -output "$file_name.docx" "$file_name.txt"
        ```
        Or
        ```
        file_name=combined2
        textutil -cat docx -output "$file_name.docx" *.java
        ```
         Or
        ```
        file_name=combined3
        cat *.java > "$file_name.txt" && \
        cupsfilter -o landscape \
        "$file_name.txt" > "$file_name.pdf" && \
        rm "$file_name.txt"
        ```

</details><br/>

</details><br/>







---
© ACME. No rights reserved - beep beep!
---