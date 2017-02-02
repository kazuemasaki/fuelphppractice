Ext.data.JsonP.command_workspace({"title":"Workspaces in Sencha Cmd","guide":"<h1>Workspaces in Sencha Cmd</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/command_workspace-section-1'>What's a Workspace?</a></li>\n<li><a href='#!/guide/command_workspace-section-2'>Generating a Workspace</a></li>\n<li><a href='#!/guide/command_workspace-section-3'>Frameworks</a></li>\n<li><a href='#!/guide/command_workspace-section-4'>Generating Pages</a></li>\n<li><a href='#!/guide/command_workspace-section-5'>Building Pages</a></li>\n<li><a href='#!/guide/command_workspace-section-6'>Configuration</a></li>\n<li><a href='#!/guide/command_workspace-section-7'>Sharing Code Between Pages</a></li>\n<li><a href='#!/guide/command_workspace-section-8'>Mixed Applications</a></li>\n</ol>\n</div>\n\n<p><p><img src=\"guides/command_workspace/../command/sencha-command-128.png\" alt=\"\"></p></p>\n\n<p>This guide shows how to use the new workspace feature of Sencha Cmd for building large\napplications that use multiple pages. This feature lets Sencha Cmd understand the pages,\nframeworks, and the shared code used by the various pages of your application. This\nenables Sencha Cmd to automate many common tasks.</p>\n\n<p>The process for building a large application starts off the same as the process for\nbuilding a single-page app. Before learning about the workspace feature for large\napplications, be sure to understand Sencha Cmd basics by reading\n<a href=\"#/guide/command_app\">Using Sencha Cmd</a>.</p>\n\n<p><em>Note on terminology.</em> Sencha frameworks-based applications, which employ MVC architecture,\ncall <code><a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a></code> at the top of the code tree. This can be confusing because the\nframeworks use the term \"application\" to describe each page. In single-page applications,\nthese terms are interchangeable. When your application involves multiple pages, however,\nthis is not the case. This guide uses the term \"page\" in most cases because that is more\nfitting in this context.</p>\n\n<h2 id='command_workspace-section-1'>What's a Workspace?</h2>\n\n<p>New to Sencha Cmd V3 is the concept of a \"workspace\". A workspace is simply a folder that\ncontains one or more pages, frameworks, packages and other shared code or files. The\nlocation of the workspace root folder should be chosen to facilitate these needs as well\nas your source control requirements. Any generated applications/pages created in sub-folders\nof the workspace folder regardless of their depth are consider to be members of the workspace.</p>\n\n<p>Though not a requirement, it is typically the case that the workspace folder is the root\nfolder in a source control repository.</p>\n\n<p>The exact organization of your pages inside your workspace is not important to Sencha Cmd.\nFor the sake of simplicity, however, the examples in this guide create all pages as immediate\nsub-folders of the workspace.</p>\n\n<h2 id='command_workspace-section-2'>Generating a Workspace</h2>\n\n<p>To generate a workspace, use this command:</p>\n\n<pre><code>sencha generate workspace /path/to/workspace\n</code></pre>\n\n<p>This will create the following structure in the specified folder.</p>\n\n<pre><code>.sencha/                # Sencha-specific files (e.g. configuration)\n    workspace/          # Workspace-specific content (see below)\n        sencha.cfg      # Configuration file for Sencha Cmd\n        plugin.xml      # Plugin for Sencha Cmd\n</code></pre>\n\n<p>The above directory structure should be familiar as it was part of the structure created in\n<a href=\"#/guide/command_app\">Using Sencha Cmd</a>. In this case, however, only the \".sencha/workspace\"\nfolder is created.</p>\n\n<h2 id='command_workspace-section-3'>Frameworks</h2>\n\n<p>The location of Sencha Ext JS or Sencha Touch (i.e., the \"SDK\" or \"framework\") is stored\nas a configuration property of the workspace. This allows multiple pages to share this\nconfiguration. Different teams will have different preferences on these locations and\nwhether or not the Sencha SDK's are stored in their source control system. The settings\ndiscussed below give you control over the location of Sencha SDK's in your workspace.</p>\n\n<p>By default, a workspace that has both Sencha Ex JS and Sencha Touch SDK's will have these\nproperty settings in <code>\".sencha/workspace/sencha.cfg\"</code>:</p>\n\n<pre><code>ext.dir=${workspace.dir}/ext\ntouch.dir=${workspace.dir}/touch\n</code></pre>\n\n<p>The value of the <code>workspace.dir</code> property is determined by Sencha Cmd and is expanded as\nneeded. In other words, by default, a workspace contains a copy of the SDK's used by the\napplications it holds.</p>\n\n<p>Applications reference their framework indirectly using the <code>app.framework</code> property in\ntheir <code>\".sencha/app/sencha.cfg\"</code> file:</p>\n\n<pre><code>app.framework=ext\n</code></pre>\n\n<h2 id='command_workspace-section-4'>Generating Pages</h2>\n\n<p>Once you have a workspace, generating pages (\"apps\") is the same as before:</p>\n\n<pre><code>sencha -sdk /path/to/ext generate app ExtApp /path/to/workspace/extApp\n</code></pre>\n\n<p>You can also generate Sencha Touch applications in the same workspace:</p>\n\n<pre><code>sencha -sdk /path/to/touch generate app TouchApp /path/to/workspace/touchApp\n</code></pre>\n\n<p>Because the target of these generated pages is in a workspace, the following structure\nwill be created (which is slightly different than for a single-page app):</p>\n\n<pre><code>.sencha/                    # Sencha-specific files (e.g. configuration)\n    workspace/              # Workspace-specific content (see below)\n        sencha.cfg          # Workspace's configuration file for Sencha Cmd\n        plugin.xml          # Workspace plugin for Sencha Cmd\n\next/                        # A copy of the Ext JS SDK\n    ...\n\ntouch/                      # A copy of the Sencha Touch SDK\n    ...\n\nextApp/\n    .sencha/                # Sencha-specific files (e.g. configuration)\n        app/                # Application-specific content\n            sencha.cfg      # Application's configuration file for Sencha Cmd\n\ntouchApp/\n    .sencha/                # Sencha-specific files (e.g. configuration)\n        app/                # Application-specific content\n            sencha.cfg      # Configuration file for Sencha Cmd\n\nbuild/                      # The folder where build output is placed.\n    extApp/                 # Build output for ExtApp (by environment)\n        production/\n        testing/\n    touchApp/               # Build output for TouchApp (by environment)\n        production/\n        testing/\n        native/\n        package/\n</code></pre>\n\n<p>To generate more pages, repeat the above command. See the respective framework's\n<a href=\"#/guide/command_app\">Using Sencha Cmd</a> guide for details.</p>\n\n<h2 id='command_workspace-section-5'>Building Pages</h2>\n\n<p>The process for building each page of a multipage application is to run this command\nfrom each of the appropriate folders:</p>\n\n<pre><code>sencha app build\n</code></pre>\n\n<p>For efficiency, you can create a script for this process, perhaps using Sencha Cmd's\n<a href=\"#/guide/command_ant\">Ant Integration</a>.</p>\n\n<h2 id='command_workspace-section-6'>Configuration</h2>\n\n<p>Configuration is similar to what is described in <a href=\"#/guide/command_app\">Using Sencha Cmd</a>.\nThe file <code>\".sencha/app/sencha.cfg\"</code> holds configuration for one page (\"app\"). The most\nimportant of the properties found there is perhaps <code>app.classpath</code>.</p>\n\n<p>Unlike the single-page application, the <code>\".sencha/workspace/sencha.cfg\"</code> file is now useful\nfor setting configuration properties for all pages in the workspace. The most important\nof these properties after framework locations is probably <code>workspace.classpath</code>.</p>\n\n<p>Settings found in multiple files are processed in \"first-write-wins\" fashion (as is normal\nfor Apache Ant scripts). This allows properties to be controlled at the command-line when\nnecessary. The order these files are loaded when present is as follows:</p>\n\n<ul>\n<li><code>${app.dir}/.sencha/app/sencha.cfg</code></li>\n<li><code>${workspace.dir}/.sencha/workspace/sencha.cfg</code></li>\n<li><code>${ext.dir}/cmd/sencha.cfg</code> or <code>${touch.dir}/cmd/sencha.cfg</code></li>\n<li><code>${cmd.dir}/sencha.cfg</code></li>\n</ul>\n\n\n<p>By convention, the properties defined in the <code>\"sencha.cfg\"</code> file for these \"scopes\" have\na common prefix. For properties at the Application scope (<code>\".sencha/app/sencha.cfg\"</code>)\nstart with \"app.\" while those in the workspace scope (<code>\".sencha/workspace/sencha.cfg\"</code>)\nhave the prefix \"workspace.\", frameworks use \"framework.\" and Sencha Cmd uses \"cmd.\".</p>\n\n<p>Details on configuration properties can be found by reading the comments found in these\nfiles. The prefix should help you find where a property is defined.</p>\n\n<h2 id='command_workspace-section-7'>Sharing Code Between Pages</h2>\n\n<p>Multipage applications commonly share code between pages. Using a workspace, you can use\nSencha Cmd to automatically scan shared code with the <code>sencha app build</code> command. Here's\nhow to do that.</p>\n\n<p>Let's add a <code>common</code> folder to the workspace, like so:</p>\n\n<pre><code>.sencha/\n    workspace/\n    ...\ncommon/             # Folder for common things between pages.\n    src/            # Folder for common JavaScript code for all pages.\n</code></pre>\n\n<p>To include <code>common/src</code> when building all pages in the application, add the follow to\n<code>\".sencha/workspace/sencha.cfg\"</code>:</p>\n\n<pre><code>workspace.classpath=${workspace.dir}/common/src\n</code></pre>\n\n<p>This adds the following component to the default classpath:</p>\n\n<pre><code>${framework.classpath},${workspace.classpath},${app.classpath}\n</code></pre>\n\n<h2 id='command_workspace-section-8'>Mixed Applications</h2>\n\n<p>Beyond sharing code between multiple Ext JS pages, or between multiple Sencha Touch\napplications, there is often the need to share code across the two Sencha frameworks.\nWhile the frameworks have a lot in common, they differ in many significant aspects,\nparticularly in the areas of UI components and layouts, which one would expect given that\nthey target such different device environments. Even with these differences, it's possible\nto share code between the two frameworks, for example, sharing code between two model\nclass definitions.</p>\n"});