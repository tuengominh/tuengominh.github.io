---
layout: assignment
title: Project Management
thumb: 02.png
assignment: work through a git tutorial and build <a href="#">this personal website.</a>
active: 1
---

<p class="font-italic font-weight-bold">* I separated 2 assignments of this week in order to avoid talking about too many things in a post. Please go 
<a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-01-1-principles-and-practices.html">here</a> to see the first part of the assignment.</p>
<p class="font-italic font-weight-bold">* The Student Agreement has been signed <a href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/agreement.html">here.</a></p>
<p class="font-italic font-weight-bold">* The website was built using <a href="#web">Jekyll</a> and was managed with <a href="#git">Gitlab.</a></p> 
<p class="font-italic font-weight-bold">* To download the source code of the website, please run in Terminal:</p> 
<pre class="bg-light py-2 mt-0"><code>$ git clone https://gitlab.fabcloud.org/academany/fabacademy/2020/labs/barcelona/students/tue-ngo.git</code></pre>
<p></p>

<h2 id="web">Website development</h2>
<h5>Jekyll</h5>
<p>I have some experiences working with static site generators, namely <a href="https://www.gatsbyjs.org/">Gatsby</a> and <a href="https://jekyllrb.com/docs/home/">Jekyll</a>. Our instructor Eduardo Chamorro also introduced us to MkDocs, and from what I understand it works in a similar way. Hence, I went ahead with Jekyll.</p>
<p>In short, Jekyll renders texts in Markdown/HTML format using Liquid template. Static sites come out ready for deployment.</p>
<ul>
<li><kbd>$ gem install bundler jekyll</kbd>: install Jekyll</li>
<li><kbd>$ jekyll new tue-fab-website</kbd>: generate a new Jekyll site</li>
<li><kbd>$ cd tue-fab-website</kbd></li>
<li>To avoid repeating myself, the next step is to create <code>_layouts</code> and pages/posts (<code>_assignments</code>) with <a href="https://jekyllrb.com/docs/front-matter/">front matters.</a> I used some Ruby codes to loop through posts, get <var>post.variable</var> values, and display them in HTML.</li> 
<li>There are pieces of HTML that are re-usable in the <code>_includes</code> folder, e.g. footer or menu.</li>
<li>Finally, I need to set a <code>baseurl</code> in <code>_config.yml</code> for configuration.</li> 
<li><kbd>$ bundle exec jekyll serve</kbd>: now if I browse <a href="http://localhost:4000">http://localhost:4000</a> in my local machine, I can review my rendered site.</li>
<li>To review the content of the project as a tree in Terminal, run <kbd>find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'</kbd>.</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/jekyll.png" class="img-fluid w-100"/>
<p>A step-by-step tutorial is available <a href="https://jekyllrb.com/docs/step-by-step/01-setup/">here.</a></p>
<p></p>

<h5>Bootstrap, Google Fonts and Font Awesome</h5>
<p>I used <a href="http://getbootstrap.com/docs/4.1/">Bootstrap 4</a> to customize the styling of the website without writing too many CSS. To use Bootstrap together with Jekyll, I included this line <code>gem 'bootstrap', '~> 4.0.0'</code> in the <code>Gemfile</code>.</p>
<p>There is also a <code>_sass/custom.css</code> file with some custom CSS. To customize fonts and icons, I used <a href="https://fonts.google.com/">Google Fonts</a> and <a href="https://fontawesome.com/v4.7.0/get-started/">Font Awesome</a> as CDN links in <code>_layouts/default.html</code>.</p>
<p></p>

<div class="share web _editor">
<h5>IntelliJ IDEA</h5>
<p>I often use an IDE called <a href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a> from Jetbrains. They're not free, but I have a perpetual license until July 2020, since I used IntelliJ as a student before, and got a good discount for all Jetbrains products (they have WebStorm for JavaScript, PyCharm for Python, etc.) for the upcoming years. I heard that institutions can apply for a <strong>FREE</strong> educational license though.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/ide.png" class="img-fluid w-100"/>
<p></p>
<p>With this IDE, I can easily create files from a template, and they also integrate a Terminal emulator. As the above screenshot, I can run command lines and open <a href="https://www.vim.org/">vim</a> editor right inside the IDE. But what I love the most are all of the smart code completion, framework assistance, and safe refactoring features.</p>
</div>
<p></p>

<h2 id="git">Git and Gitlab</h2>

<h5>SSH key</h5>
<p>Since I had access to my Gitlab repository from the very first class, and before I already generated an SSH key that links to my personal Gitlab account, the process became quite simple. All I need to do was to copy the SSH key in the personal Gitlab account and paste it into my gitlab.fabcloud.org account as an existing key.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/ssh-1.png" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/ssh-2.png" class="img-fluid w-100"/>
<p></p>

<h5>Push changes to Gitlab</h5>
<p>Git is a VCS (version control system) that helps us to track versions as well as contributions in projects. Since I developed my website <strong>BEFORE</strong> getting access to the repo, I didn't clone the project. Instead, I removed the existing files directly on Gitlab, which led to a huge amount of commits. I also deleted the <code>.gitlab-ci.yml</code> file which is used for MkDocs sites and created a new one for Jekyll there. The templates are available in the <strong>CI/CD Configuration</strong> section.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/git-1.png" class="img-fluid w-100"/>
<p></p>
<p>The following command lines were slightly different from the usual add -> commit -> push process:</p>
<ul>
<li><kbd>$ git init</kbd>: initialize a local repo</li>
<li><kbd>$ git remote add origin gitlab_URL</kbd>: connect the Gitlab remote branch to my local repo</li>
<li><kbd>$ git pull origin master --allow-unrelated-histories</kbd>: fetch and merge all files/changes that I don't have in my local repo, i.e. the new <code>.gitlab-ci.yml</code></li>
<li><kbd>$ git status</kbd> and <kbd>$ git add</kbd>: to see changes and stage them for commit</li>
<li><kbd>$ git commit -m "Messages here"</kbd>: commit changes</li>
<li><kbd>$ git push --set-upstream origin master</kbd>: push changes to the Gitlab remote repo</li>
</ul>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/git-3.png" class="img-fluid w-100"/>
<p></p>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/git-4.png" class="img-fluid w-100"/>
<p></p>
<p>After pushing, I still couldn't deploy my website properly on Fab Academy server. It seems like the Bundler version required (2.0.2) is greater than the version in my <code>Gemfile.lock</code> (2.0.1 - checked the very last lines).</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/git-8.png" class="img-fluid w-100"/>
<p>With the help from our instructor Oscar Gonzalez and Viktor Smari from the Code Lab, I solved this by adding this line <code>- gem install bundler -v 2.0.2</code> right before <code>- bundle install</code> in the <code>.gitlab-ci.yml</code>. And I have my website deployed successfully!</p>
<p></p>

<h5>Managing size of the local and remote repositories</h5>
<p>In order to check the size of the local repo, I ran <kbd>du -sh * | sort -n</kbd> in Terminal. I used Photoshop to resize the images and to make sure the dpi (Resolution) to be 96 or 72. Since I'm not really happy with the way my Macbook screams and vibrates everytime I use Photoshop together with IntelliJ IDEA, I'm thinking about using <a href="https://imagemagick.org/index.php">ImageMagick</a> in the future.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/compress-1.png" class="img-fluid w-100"/>
<p></p>
<p>However, I forgot one thing that even if I drag-to-delete a giant file after pushing it, the size of the Gitlab repo will remain big, since the file is still cached somehow in the history. For example, the actual size of my local repo is ~5MB, but the total size of files in my Gitlab repo is ~9MB. I intended to try <kbd>$ git filter-branch</kbd> to rewrite the history, but later I figured out from Oscar that we cannot rebase commits and run <kbd>$ git push -force</kbd>. So I left it like that.</p>
<h6>Updates</h6> 
<p>I continued to make mistakes by adding unnecessary large files in the second assignment. This time I was confused about whether I should upload the videos recording the process of modeling my design or not, and I decided to upload compressed ones (~3MB) because "compressing videos" is mentioned in the assignment. <strong>AFTER</strong> adding them to git, I found out that I only need to embed Youtube links. To be honest, seeing the size of my repo getting unnecessarily bigger is quite frustrated. That's why I spent a whole day trying to remove the deleted files from the history. I finally found 2 interesting sections in <strong>Settings > Repository</strong>. The first one is <strong>Protected Branches</strong> in which I can unprotect my branches in order to remove deleted files from the history, rewrite the history, and run <kbd>$ git push -force</kbd>. After asking for permission, I unprotected my master branch.</p>
<img src="{{site.baseurl}}/assets/img/assignments/week-01/git-5.png" class="img-fluid w-100"/>
<p></p>
<p>The next thing I took a look at is the <strong>Repository Cleanup</strong>. First I followed the suggestion by installing <a href="https://rtyley.github.io/bfg-repo-cleaner/">BFG</a> and tried to use it to remove files with deleted mode.</p> 
<img src="{{site.baseurl}}/assets/img/assignments/week-01/git-6.png" class="img-fluid w-100"/>
<p></p>
<ul>
<li><kbd>$ git clone --mirror gitlab_URL</kbd>: clone a bare repo <code>tue-ngo.git</code> in my local machine</li>
<li><kbd>$ du -sh .</kbd>: check the size of the bare repo which was 18M</li>
<li><kbd>$ git log --diff-filter=D --summary | grep "delete mode" > deleted_files.txt</kbd>: create a <code>deleted_files.txt</code> which includes all files in .git history with delete mode</li>
<li><kbd>$ bfg --delete-folders "{assets, doc}" tue-ngo.git</kbd>: delete the folders that I want to remove from the history</li>
<li><kbd>$ git reflog expire --expire=now --all && git gc --prune=now --aggressive</kbd>: clean up the mess</li>
<li><kbd>$ du -sh .</kbd> and <kbd>$ git count-objects</kbd>: check the size of the bare repo again, which was 4.6M</li>
<li><kbd>$ git push --force</kbd>: force push changes to the Gitlab remote repo</li>
</ul>
<p>However, after I push changes to the repo, the size remains the same. I continued to search for solutions, and from what I understand from <a href="https://github.com/rtyley/bfg-repo-cleaner/issues/208">here</a> and <a href="https://stackoverflow.com/questions/31932574/clean-up-large-files-on-git-server">there</a>, it might be a Gitlab issue. Anyway, I gave up. I will keep this in mind and will add/remove files properly for the next assignments.</p>
<p></p>

<div class="container w-100 text-center py-4">
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-01-1-principles-and-practices.html">Previous Assignment</a>
<a class="btn m-2" href="http://academany.fabcloud.io/fabacademy/2020/labs/barcelona/students/tue-ngo/assignments/week-02-computer-aided-design.html">Next Assignment</a>
</div>