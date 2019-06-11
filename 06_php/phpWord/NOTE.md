- ## 使用phpWord插件
    + [参考手册](https://phpword.readthedocs.io/en/latest/)
    + ## 在要测试的目录下打开命令界面，数据`composer init`，初始化一个`composer.json`文件，用于记录依赖
    + 在`composer.json`文件中输入
    ```json
        {
            "require": {
               "phpoffice/phpword": "v0.14.*"
            }
        }
    ```
    然后在命令行中输入 `composer install` 来安装phpword插件
    + 使用
        * 在命令行会在目录下生成几个文件夹
            ![](image/gene_dir.png)
        * 在`vendor\phpoffice\phpword`中新建一个文档来测试，但是要注意修改 `bootstrap.php` 中的地址。
            ![](image/alert.png.png)
        * 然后在`vendor\phpoffice\phpword`下新建的文档中，可以输入下面的代码进行测试了。
        * 如下:
        ```php
        require_once 'bootstrap.php';

        // Creating the new document...
        $phpWord = new \PhpOffice\PhpWord\PhpWord();

        /* Note: any element you append to a document must reside inside of a Section. */

        // Adding an empty Section to the document...
        $section = $phpWord->addSection();
        // Adding Text element to the Section having font styled by default...
        $section->addText(
            '"Learn from yesterday, live for today, hope for tomorrow. '
                . 'The important thing is not to stop questioning." '
                . '(Albert Einstein)'
        );

        /*
         + Note: it's possible to customize font style of the Text element you add in three ways:
         + - inline;
         + - using named font style (new font style object will be implicitly created);
         + - using explicitly created font style object.
         */

        // Adding Text element with font customized inline...
        $section->addText(
            '"Great achievement is usually born of great sacrifice, '
                . 'and is never the result of selfishness." '
                . '(Napoleon Hill)',
            array('name' => 'Tahoma', 'size' => 10)
        );

        // Adding Text element with font customized using named font style...
        $fontStyleName = 'oneUserDefinedStyle';
        $phpWord->addFontStyle(
            $fontStyleName,
            array('name' => 'Tahoma', 'size' => 10, 'color' => '1B2232', 'bold' => true)
        );
        $section->addText(
            '"The greatest accomplishment is not in never falling, '
                . 'but in rising again after you fall." '
                . '(Vince Lombardi)',
            $fontStyleName
        );

        // Adding Text element with font customized using explicitly created font style object...
        $fontStyle = new \PhpOffice\PhpWord\Style\Font();
        $fontStyle->setBold(true);
        $fontStyle->setName('Tahoma');
        $fontStyle->setSize(13);
        $myTextElement = $section->addText('"Believe you can and you\'re halfway there." (Theodor Roosevelt)');
        $myTextElement->setFontStyle($fontStyle);

        // Saving the document as OOXML file...
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save('helloWorld.docx');

        // Saving the document as ODF file...
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'ODText');
        $objWriter->save('helloWorld.odt');

        // Saving the document as HTML file...
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'HTML');
        $objWriter->save('helloWorld.html');

        /* Note: we skip RTF, because it's not XML-based and requires a different example. */
        /* Note: we skip PDF, because "HTML-to-PDF" approach is used to create PDF documents. */
        ```
    + 对比
        ```php
        <?php
            require_once 'bootstrap.php';

            // Creating the new document...
            $phpWord = new \PhpOffice\PhpWord\PhpWord();

            $file = "123.docx";
            //返回一个 TemplateProcessor Object
            //相关方法可以在TemplateProcessor的Class中找，貌似没找到可以转化成HTML的方法
            $word = $phpWord->loadTemplate($file);
            $word->saveAs("11.docx");

            //返回一个 PhpWord Object
            $section = $phpWord->createSection(); 
            //返回一个 PhpWord Object
            $w = \PhpOffice\PhpWord\IOFactory::load($file);           
            $wordWriter = \PhpOffice\PhpWord\IOFactory::createWriter($w, "Word2007");
            $wordWriter->save("12.docx");

        ?>
        ```
