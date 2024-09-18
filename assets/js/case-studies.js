$(document).ready(function () {
    // jQuery settings for the modal dialog
    $.fx.speeds._default = 1000;

    var $scde = $('<div class="information"></div>')
        .html('<p>The SCDE is a manually curated public resource with a focus on cancer, powered by the ISA software suite and hosted by the HSCI. SCDE handles the submission, integration, visualization and dissemination of high-throughput studies and provides linked molecular analysis through <a href="http://galaxy.psu.edu/" target="_blank">Galaxy</a> to experimental metadata. Data sets selected for inclusion are annotated using public resources and then expertly curated to ensure accuracy, consistency, compliance with relevant reporting requirements and appropriate use of terminologies.</p>')
        .dialog({
            autoOpen:false,
            title:'HSCI Stem cell Discovery engine'
        });

    $('#scde').click(function () {
        $scde.dialog('open');
        return false;
    });

    var $bioplatforms = $('<div class="information"></div>')
        .html('<p>In collaboration with Australian research scientists, institutes and government agencies, Bioplatforms Australia is creating publicly accessible national framework datasets.  The first framework dataset includes wheat genotyping together with significant wheat pathogens and pests data.  Additional framework datasets will be based on melanoma and an Australian soil biodiversity metagenomics survey. Future datasets are currently being considered around challenges in industrial biology, agricultural topics, environmental issues, and unique Australian flora or fauna. The dataset collections are made searchable and accessible through the Bioplatforms Australia framework dataset portal. This portal is based on ISA framework to facilitate the management, sharing and re-use of studies composed of diverse data types including genomic, transcriptomic, proteomic and metabolic datasets.</p>')
        .dialog({
            autoOpen:false,
            title:'Bioplatforms Australia'
        });

    $('#bioplatforms').click(function () {
        $bioplatforms.dialog('open');
        return false;
    });

    var $csiro = $('<div class="information"></div>')
        .html('<p>CSIRO is Australias national science agency with a large and diverse research agenda. In the first instance, CSIRO will implement the ISA framework to manage toxicity data for a number of insect hosts from insect toxicity studies and corresponding genomics data from numerous bacterial strains using various platforms and technologies with a view to identifying new bacterial insecticide toxins. ISA software suite will provide the organisational framework enabling the project and lay down the infrastructure for future projects incorporating new sources of insecticidal toxins and rational toxin design.</p>')
        .dialog({
            autoOpen:false,
            title:'CSIRO'
        });

    $('#csiro').click(function () {
        $csiro.dialog('open');
        return false;
    });

    var $gigascience = $('<div class="information"></div>')
        .html('<p>Now the world’s largest sequencing center, BGI (formerly known as the Beijing Genomics Institute) is centrally involved in many large international sequencing projects. To speed the review, publication and sharing of large-scale data sets, BGI has launched GigaScience, a combined database and journal using BGI’s cloud computing and server infrastructure. GigaScience will use the ISA framework to capture many kinds of study and assay metadata along with relationships between data set components. Through implementation of DataCite’s <a href="http://www.doi.org/" target="_blank">Digital Object Identifiers (DOIs)</a>, data sets will be fully trackable and citable, supporting the awarding of credit to data producers.</p>')
        .dialog({
            autoOpen:false,
            title:'GigaScience at BGI'
        });

    $('#gigascience').click(function () {
        $gigascience.dialog('open');
        return false;
    });

    var $lincs = $('<div class="information"></div>')
        .html('<p>The HMS LINCS Center was established as one of several NIH-funded centers in the US creating libraries of signatures that describe how cells respond to perturbation. The aim of the HMS Center is to create signatures that measure responses of cells derived from different human tissues to therapeutic drugs. The responses of approximately 800 cell lines/cell types to around 200 small molecules and cytokines are under investigation in a variety of biochemical and cell biological assays. LINCS data are accessible in public online repositories. We are implementing the ISA framework as a key technology to facilitate sharing of LINCS experiment and protocol metadata.</p>')
        .dialog({
            autoOpen:false,
            title:'HMS Library of Integrated Network-based Cellular Signatures'
        });

    $('#lincs').click(function () {
        $lincs.dialog('open');
        return false;
    });

    var $hsciblood = $('<div class="information"></div>')
        .html('<p>The HSCI Blood Genomics Repository holds hematopoietic (blood) stem cell data from HSCI Blood program researchers studying the molecular and cellular characteristics and pathways involved in hematopoietic stem cell self-renewal. The repository comprises heavily curated data from gene expression, epigenetic modification and transcription factor– binding studies using various technologies and platforms, and it is made available in the form of ISA-Tab compatible files.</p>')
        .dialog({
            autoOpen:false,
            title:'HSCI Blood genomics repository'
        });

    $('#hsciblood').click(function () {
        $hsciblood.dialog('open');
        return false;
    });

    var $meryb = $('<div class="information"></div>')
        .html('<p>The MeRy-B is a plant metabolomics management system. It contains plant metabolite and unknown compound lists with information about experimental conditions and metabolite concentrations from several plant species compiled from a thousand of curated annotated NMR profiles of various organs or tissues. Relying on <a href="http://bioportal.bioontology.org/" target="_blank">BioPortal</a> ontologies, MeRy-B is working to support the ISA-Tab format, in order to supply data in the growing ecosystem of resources, and thus, to support the effort towards data sharing and integration.</p>')
        .dialog({
            autoOpen:false,
            title:'MeRy-B'
        });

    $('#meryb').click(function () {
        $meryb.dialog('open');
        return false;
    });

    var $metabolights = $('<div class="information"></div>')
        .html('<p>The MetaboLights resource will include the first public cross-species, cross-application database at the EBI accepting metabolite structures and other data from metabolomic experiments. A curated reference layer with spectroscopic, chemical and biological information about metabolites will be developed to enhance submitted data. The project uses the ISA software suite and will publish customized templates for capturing study information, and assays using nuclear magnetic resonance and mass spectrometry, using common terminologies.</p>')
        .dialog({
            autoOpen:false,
            title:'<a href="http://www.ebi.ac.uk/metabolights">Metabolights</a>'
        });

    $('#metabolights').click(function () {
        $metabolights.dialog('open');
        return false;
    });

    var $nerc = $('<div class="information"></div>')
        .html('<p>The UK NERC NEBC collects and catalogs data sets from environmental and functional genomics investigations by the NERC research community and their international collaborators. Using the ISA software suite, the NEBC’s data catalog, EnvBase, has recently been expanded to hold and serve investigations curated to meet community- developed standards requirements, in particular, the <a href="http://gensc.org" target="_blank">GSC’s</a> <a href="http://www.nature.com/nbt/journal/v29/n5/full/nbt.1823.html" target="_blank">MIxS</a> standards relevant to metagenomic investigations.  The collection of experimental metadata at source is facilitated by the deployment of the editor component on a <a href="http://nebc.nerc.ac.uk/nebc/agents/bio-linux" target="_blank">Bio-Linux</a> platform.</p>')
        .dialog({
            autoOpen:false,
            title:'NERC EnvBase'
        });

    $('#nerc').click(function () {
        $nerc.dialog('open');
        return false;
    });

    var $niehs_env = $('<div class="information"></div>')
        .html('<p>The National Institute of Environmental Health Sciences’ Center for Environmental Health at Harvard works to preserve a diverse array of data from environmental research, population-, patient- and laboratory-based studies, and published data sets imported from other databases. The ISA infrastructure serves as the base for this institutional repository and will also serve as a ‘resource locator’, allowing new investigators to quickly identify collaborators and available preliminary data from historical studies, reducing redundancy. </p>')
        .dialog({
            autoOpen:false,
            title:'NIEHS Center for Environmental Health'
        });

    $('#niehs').click(function () {
        $niehs_env.dialog('open');
        return false;
    });

    var $dbNP = $('<div class="information"></div>')
        .html('<p>The Nutritional Phenotype Database (dbNP) facilitates the sharing of large-scale laboratory clinical intervention and observation studies relating to food intake between Dutch research groups and with international consortia. Their harmonization of study description, following the ISA approach, allows cross- experiment comparisons and facilitates the querying of data at the biological outcome level (for example, by pathway).</p>')
        .dialog({
            autoOpen:false,
            title:'Nutritional Phenotype Database'
        });

    $('#dbnp').click(function () {
        $dbNP.dialog('open');
        return false;
    });

    var $seek = $('<div class="information"></div>')
        .html('<p>The SEEK is a web-based registry and repository for systems biology data, models and experiments. Originally developed for SysMO, a pan-European consortium studying dynamic molecular processes in microorganisms, it has since been adopted to handle data sets from other large systems biology projects. The SEEK ‘experimental contexts’ follow the ISA approach for conversion to other formats.</p>')
        .dialog({
            autoOpen:false,
            title:'SEEK'
        });

    $('#seek').click(function () {
        $seek.dialog('open');
        return false;
    });

    var $sidr = $('<div class="information"></div>')
        .html('<p>The Standards-based Infrastructure with Distributed Resources (SIDR) works to collect, preserve and disseminate genomics and functional genomics data sets from a variety of French National Centre for Scientific Research’s groups. The various experiment types are structured following the ISA approach, identified with <a href="http://www.doi.org/" target="_blank">DOIs</a>, and also provided in several formats. Part of a broader approach, SIDR aims to address complex issues in systems biology and is being customized for the translational medicine domain.</p>')
        .dialog({
            autoOpen:false,
            title:'SIDR'
        });

    $('#sidr').click(function () {
        $sidr.dialog('open');
        return false;
    });

//    Internal resources

    var $bioscholar = $('<div class="information"></div>')
        .html('<p>The BIRN Knowledge Engineering Groups planned development of <a href="http://yogo.msu.montana.edu/applications/crux.html" target="_blank">Crux</a> includes an import / export features of datasets in ISA-Tab, by specifically converting our internal representation to the common format. The first datasets to be included are based on (a) systems level neuroscience data, such as neural connectivity and physiology, (b) Simian Immunodeficiency Virus (SIV) and Human immunodeficiency virus (HIV) vaccine-protection studies and (c) mouse phenotype studies and (d) drug infusion studies.</p>')
        .dialog({
            autoOpen:false,
            title:'BIRN BioScholar'
        });

    $('#bioscholar').click(function () {
        $bioscholar.dialog('open');
        return false;
    });

    var $anl = $('<div class="information"></div>')
        .html('<p>As part of the <a href="http://www.earthmicrobiome.org" target="_blank">Earth Microbiome Project</a> and the <a href="http://www.microbe.net" target="_blank">MicroBEnet Sloan effort</a>, the Environmental Microbiology group is generating petabases of sequencing data from tens of thousands of environmental samples aimed to cataloguing and interpreting the microbial interactions in the natural world. One of the key aspects of this study is curation of the environmental metadata (e.g. locationof sampling, temperature, pH, moisture content and nutrient concentration in soils), essential for characterizing the microbial niche structure and to contextualize the community taxonomic and functional data from globally distributed samples. The group utilizes the ISA software suite to collate and curate metadata according to the <a href="http://gensc.org/" target="_blank">GSC’s</a> <a href="http://www.nature.com/nbt/journal/v29/n5/full/nbt.1823.html" target="_blank">MIxS</a> standards and distribute it publicly via the <a href="http://bii.nwl.ac.uk/bioinvindex/" target="_blank">NEBC envbase instance</a> (also part of the ISA Commons).</p>')
        .dialog({
            autoOpen:false,
            title:'Environmental Microbiology activities at the Argonne National Laboratory'
        });

    $('#anl').click(function () {
        $anl.dialog('open');
        return false;
    });

    var $fda = $('<div class="information"></div>')
        .html('<p>The FDA Center for Bioinformatics conducts research and develops and coordinates informatics capabilities within NCTR, across FDA Centers, and in the larger toxicology community. The Centre works to enable more efficient safety review, earlier detection of defective products that cause adverse events, and better use of personalized nutritional and medical information based on genomic and phenotypic data. The team works to use modules of the ISA software suite in an internal multi-components system, including  ArrayTrack a freely available agent for the analysis, and interpretation of transcriptomics, proteomics and metabolomics data that supports FDA regulatory research and review of genomic data submissions. </p>')
        .dialog({
            autoOpen:false,
            title:'FDA’s Center for Bioinformatics at the National Center for Toxicological Research (NCTR)'
        });

    $('#fda').click(function () {
        $fda.dialog('open');
        return false;
    });

    var $ipb = $('<div class="information"></div>')
        .html('<p>The IPB’s Bioinformatics and MS group supports the activities of the <a href="http://www.ipb-halle.de/en/research/stress-and-developmental-biology/" target="_blank">Stress and Developmental Biology department</a> by building and maintaining agents and database enabling researchers to study the functional analysis of metabolic diversity. The group works to deploy the ISA software suite as a central, internal LIMS, closely integrated with an array of existing in-house systems, e.g. <a href="http://metware.org/" target="_blank">MetWare</a>, to assist the researchers in the investigation of the analysis of recognition, signal transduction and gene activation processes in plant-pathogen interactions.  The first working installation of the ISA software components is being piloted to harmonize the collection and reporting of MS-based metabolomics studies, progressively moving to NMR-based metabolomics, proteomics and transcriptomic studies. Work is also in progress to finalize the rISA component to work with <a href="http://www.bioconductor.org/packages/2.6/bioc/html/xcms.html" target="_blank">BioConductor xcms</a> package for the analysis of LC/MS and GC/MS data.</p>')
        .dialog({
            autoOpen:false,
            title:'The Leibniz Institute of Plant Biochemistry (IPB)’s Bioinformatics & Mass Spectrometry (MS)'
        });

    $('#ipb').click(function () {
        $ipb.dialog('open');
        return false;
    });

    var $icomm = $('<div class="information"></div>')
        .html('<p></p>')
        .dialog({
            autoOpen:false,
            title:'Microbial Inventory Research Across Diverse Aquatic Long Term Ecological Research Sites (MIRADA LTERs), the International Census of Marine Microbes (ICoMM)'
        });

    $('#icomm').click(function () {
        $icomm.dialog('open');
        return false;
    });

    var $novartis = $('<div class="information"></div>')
        .html('<p>An instance of selected ISA software components is also being integrated as part of an extended workflow for a microarray gene expression resource at The Novartis Institutes for BioMedical Research to facilitate research aimed at drug discovery and development.</p>')
        .dialog({
            autoOpen:false,
            title:'The Novartis Institutes for BioMedical Research'
        });

    $('#novartis').click(function () {
        $novartis.dialog('open');
        return false;
    });

    var $nanotab = $('<div class="information"></div>')
        .html('<p></p>')
        .dialog({
            autoOpen:false,
            title:'ISA-TAB-Nano'
        });

    $('#nanotab').click(function () {
        $nanotab.dialog('open');
        return false;
    });

    var $SNRNASM = $('<div class="information"></div>')
        .html('<p>The SNRNASM standard is based on the ISA-Tab format and facilitates sharing chemical and enzymatic structure probing data. These experiments provide high-resolution structural information on both DNA and RNA, and are used to refine and validate structural hypotheses. Over 30 different chemical and enzymatic probes are routinely used, and the common data structure facilitates data integration in structural prediction modeling.</p>')
        .dialog({
            autoOpen:false,
            title:'SNRNASM'
        });

    $('#SNRNASM').click(function () {
        $SNRNASM.dialog('open');
        return false;
    });

    var $toxbank = $('<div class="information"></div>')
        .html('<p>The ToxBank consortium is developing a series of infrastructure projects to support the activities across<a href="http://www.seurat-1.eu" target="_blank">SEURAT-1</a>cluster including a data warehouse. This warehouse is a web accessible shared repository of know-how and experimental results to support the development of a replacement for in vivo repeated dose toxicity testing. The information within the ToxBank data warehouse will be uploaded from the research activities of the cluster partners as well as from other sources, such as public databases. The data will be collected to enable a cross-cluster integrated data analysis leading to the prediction of repeated dose toxicity. The ToxBank data warehouse will use the ISA-Tab format for storage, interchange and query of any investigation data, including dose-response and omics results.</p>')
        .dialog({
            autoOpen:false,
            title:'ToxBank'
        });

    $('#toxbank').click(function () {
        $toxbank.dialog('open');
        return false;
    });

    var $janssen = $('<div class="information"></div>')
        .html('<p>Janssen Research & Development, LLC discovers and develops innovative medicines in several therapeutic areas including immunology where the ISA framework is being used to collect, annotate and search relevant datasets.</p>')
        .dialog({
            autoOpen:false,
            title:'Janssen'
        });

    $('#dixa').click(function () {
        $dixa.dialog('open');
        return false;
    });

    var $dixa = $('<div class="information"></div>')
            .html('<p>The "Data infrastructure for chemical safety" (diXa) project aims to support the EU Toxicogenomics Research Community in developing non-animal assays in vitro/in silico for chemical safety, which better predict human toxicity in vivo. The diXa project will design a robust and openly accessible data infrastructure for capturing toxicogenomics data produced by past, current and future EU research projects; provide data generation, harmonization and standardization services, as well as customized agents and techniques for advanced statistics and modeling. The diXa Data Warehouse will link to other globally available chemical/toxicological data bases and data bases on molecular data of human disease to facilitate interdisciplinary research. </p><p>The diXa project will use ISAagents to ensure consistent study annotation. Collaborating toxicogenomics projects will use ISAcreator to consistently format their experimental data according to a custom ISA-tab configuration. These harmonised datasets will be collected in the publicly-accessible and highly-interlinked diXa Data Warehouse.</p>')
            .dialog({
                autoOpen:false,
                title:'diXa'
            });

        $('#janssen').click(function () {
            $janssen.dialog('open');
            return false;
        });

});
