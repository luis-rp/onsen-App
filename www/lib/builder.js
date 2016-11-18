module.controller('builderController', function($scope, $http, $sce) {
	ons.ready(function() {
		$scope.lang = localStorage.getItem("lang");
		$scope.$on('lang_tag', function(event,data) {
			$scope.lang = data;
			$scope.$digest();
		});
		if(!$scope.lang) $scope.lang = "en";
		$scope.vocabulary=[];
		$scope.vocabulary["en"] = {};
		$scope.vocabulary["hb"] = {};
		
		$scope.vocabulary["en"]["App builder"]="App builder";
		$scope.vocabulary["hb"]["App builder"]="בניית אפליקציה";
		$scope.vocabulary["en"]["Page block"]="Page block";
		$scope.vocabulary["hb"]["Page block"]="בלוק דף";
		$scope.vocabulary["en"]["Posts block"]="Posts block";
		$scope.vocabulary["hb"]["Posts block"]="בלוק רשימת פוסטים";
		$scope.vocabulary["en"]["Add image"]="Add image";
		$scope.vocabulary["hb"]["Add image"]="הוסף בלוק";
		$scope.vocabulary["en"]["Add block"]="Add block";
		$scope.vocabulary["hb"]["Add block"]="הוסף בלוק";
		$scope.vocabulary["en"]["Add blocks"]="Add blocks";
		$scope.vocabulary["hb"]["Add blocks"]="הוסף בלוק";
		$scope.vocabulary["en"]["Add new image url"]="Add new image url";
		$scope.vocabulary["hb"]["Add new image url"]="הוסף כתובת תמונה";
		$scope.vocabulary["en"]["Select block type"]="Select block type";
		$scope.vocabulary["hb"]["Select block type"]="בחר סוג בלוק";
		$scope.vocabulary["en"]["Add text"]="Add text";
		$scope.vocabulary["hb"]["Add text"]="הוסף טקסט";
		$scope.vocabulary["en"]["Add form"]="Add form";
		$scope.vocabulary["hb"]["Add form"]="הוסף טופס";
		$scope.vocabulary["en"]["Add button"]="Add button";
		$scope.vocabulary["hb"]["Add button"]="";
		$scope.vocabulary["en"]["Single post block"]="Single post block";
		$scope.vocabulary["hb"]["Single post block"]="בלוק פוסט יחיד";
		$scope.vocabulary["en"]["Add video"]="Add video";
		$scope.vocabulary["hb"]["Add video"]="הוסף וידאו";
		$scope.vocabulary["en"]["Add text input"]="Add text input";
		$scope.vocabulary["hb"]["Add text input"]="הוסף שדה טקסט";
		$scope.vocabulary["en"]["Add select input"]="Add select input";
		$scope.vocabulary["hb"]["Add select input"]="הוסף תפריט נפתח";
		$scope.vocabulary["en"]["Add check box input"]="Add check box input";
		$scope.vocabulary["hb"]["Add check box input"]="הוסף תיבת בחירה";
		$scope.vocabulary["en"]["Add radio input"]="Add radio input";
		$scope.vocabulary["hb"]["Add radio input"]="הוסף כפתור בחירה רדיו";
		$scope.vocabulary["en"]["Text block"]="Text block";
		$scope.vocabulary["hb"]["Text block"]="בלוק טקסט";
		$scope.vocabulary["en"]["Button block"]="Button block";
		$scope.vocabulary["hb"]["Button block"]="";
		$scope.vocabulary["en"]["Edit"]="Edit";
		$scope.vocabulary["hb"]["Edit"]="ערוך";
		$scope.vocabulary["en"]["Form block"]="Form block";
		$scope.vocabulary["hb"]["Form block"]="בלוק טופס";
		
		$scope.movePageUp = function(key){
			if($scope.blocks.pages[key-1]!=undefined)
			{
				var arr1 = $scope.blocks.pages[key-1];
				var arr2 = $scope.blocks.pages[key];
				$scope.blocks.pages[key] = arr1;
				$scope.blocks.pages[key-1] = arr2;
			}
		};
		$scope.movePageDown = function(key){
			if($scope.blocks.pages[key+1]!=undefined)
			{
				var arr1 = $scope.blocks.pages[key+1];
				var arr2 = $scope.blocks.pages[key];
				$scope.blocks.pages[key] = arr1;
				$scope.blocks.pages[key+1] = arr2;
			}
		};
		$scope.movePageElemUp = function(key,key2){
			if($scope.blocks.pages[key]['Elements'][key2-1]!=undefined)
			{
				var arr1 = $scope.blocks.pages[key]['Elements'][key2-1];
				var arr2 = $scope.blocks.pages[key]['Elements'][key2];
				$scope.blocks.pages[key]['Elements'][key2] = arr1;
				$scope.blocks.pages[key]['Elements'][key2-1] = arr2;
			}
		};
		$scope.movePageElemDown = function(key,key2){
			if($scope.blocks.pages[key]['Elements'][key2+1]!=undefined)
			{
				var arr1 = $scope.blocks.pages[key]['Elements'][key2+1];
				var arr2 = $scope.blocks.pages[key]['Elements'][key2];
				$scope.blocks.pages[key]['Elements'][key2] = arr1;
				$scope.blocks.pages[key]['Elements'][key2+1] = arr2;
			}
		};
		$scope.movePageFormElemUp = function(key,key2,key3){
			if($scope.blocks.pages[key]['Elements'][key2]['elems'][key3-1]!=undefined)
			{
				var arr1 = $scope.blocks.pages[key]['Elements'][key2]['elems'][key3-1];
				var arr2 = $scope.blocks.pages[key]['Elements'][key2]['elems'][key3];
				$scope.blocks.pages[key]['Elements'][key2]['elems'][key3] = arr1;
				$scope.blocks.pages[key]['Elements'][key2]['elems'][key3-1] = arr2;
			}
		};
		$scope.movePageFormElemDown = function(key,key2,key3){
			if($scope.blocks.pages[key]['Elements'][key2]['elems'][key3+1]!=undefined)
			{
				var arr1 = $scope.blocks.pages[key]['Elements'][key2]['elems'][key3+1];
				var arr2 = $scope.blocks.pages[key]['Elements'][key2]['elems'][key3];
				$scope.blocks.pages[key]['Elements'][key2]['elems'][key3] = arr1;
				$scope.blocks.pages[key]['Elements'][key2]['elems'][key3+1] = arr2;
			}
		};
		
		$scope.movePostsUp = function(key){
			if($scope.blocks.posts[key-1]!=undefined)
			{
				var arr1 = $scope.blocks.posts[key-1];
				var arr2 = $scope.blocks.posts[key];
				$scope.blocks.posts[key] = arr1;
				$scope.blocks.posts[key-1] = arr2;
			}
		};
		$scope.movePostsDown = function(key){
			if($scope.blocks.posts[key+1]!=undefined)
			{
				var arr1 = $scope.blocks.posts[key+1];
				var arr2 = $scope.blocks.posts[key];
				$scope.blocks.posts[key] = arr1;
				$scope.blocks.posts[key+1] = arr2;
			}
		};
		$scope.movePostsElemUp = function(key,key2){
			if($scope.blocks.posts[key]['elems'][key2-1]!=undefined)
			{
				var arr1 = $scope.blocks.posts[key]['elems'][key2-1];
				var arr2 = $scope.blocks.posts[key]['elems'][key2];
				$scope.blocks.posts[key]['elems'][key2] = arr1;
				$scope.blocks.posts[key]['elems'][key2-1] = arr2;
			}
		};
		$scope.movePostsElemDown = function(key,key2){
			if($scope.blocks.posts[key]['elems'][key2+1]!=undefined)
			{
				var arr1 = $scope.blocks.posts[key]['elems'][key2+1];
				var arr2 = $scope.blocks.posts[key]['elems'][key2];
				$scope.blocks.posts[key]['elems'][key2] = arr1;
				$scope.blocks.posts[key]['elems'][key2+1] = arr2;
			}
		};
		
		$scope.moveSingleUp = function(key){
			if($scope.blocks.single[key-1]!=undefined)
			{
				var arr1 = $scope.single.single[key-1];
				var arr2 = $scope.single.single[key];
				$scope.blocks.single[key] = arr1;
				$scope.blocks.single[key-1] = arr2;
			}
		};
		$scope.moveSingleDown = function(key){
			if($scope.blocks.single[key+1]!=undefined)
			{
				var arr1 = $scope.blocks.single[key+1];
				var arr2 = $scope.blocks.single[key];
				$scope.blocks.single[key] = arr1;
				$scope.blocks.single[key+1] = arr2;
			}
		};
		$scope.moveSingleElemUp = function(key,key2){
			if($scope.blocks.single[key]['elems'][key2-1]!=undefined)
			{
				var arr1 = $scope.blocks.single[key]['elems'][key2-1];
				var arr2 = $scope.blocks.single[key]['elems'][key2];
				$scope.blocks.single[key]['elems'][key2] = arr1;
				$scope.blocks.single[key]['elems'][key2-1] = arr2;
			}
		};
		$scope.moveSingleElemDown = function(key,key2){
			if($scope.blocks.single[key]['elems'][key2+1]!=undefined)
			{
				var arr1 = $scope.blocks.single[key]['elems'][key2+1];
				var arr2 = $scope.blocks.single[key]['elems'][key2];
				$scope.blocks.single[key]['elems'][key2] = arr1;
				$scope.blocks.single[key]['elems'][key2+1] = arr2;
			}
		};
		
		
		$scope.goToBlockPreview = function(){
			
			jQuery("#loader").fadeIn();
			$http({
				url: "http://letsgetstartup.com/wp-admin/admin-ajax.php", 
				method: "POST",
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				params: {
					action: "build_block_app",
					callback:'JSON_CALLBACK'
				},data: {
					project_id: localStorage.getItem("project_id"),
					user_id: localStorage.getItem("id"),
				},
			}).then(function(response) {
				jQuery("#loader").fadeOut();
				//alert();
				//alert(response.data);
				console.log(response.data);
				$scope.goToPreview();
			});
		};
		$scope.getBlockHiearchy = function(){
			$http({
				url: "http://letsgetstartup.com/wp-admin/admin-ajax.php", 
				method: "POST",
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				params: {
					action: "get_block_hiearchy",
					callback:'JSON_CALLBACK'
				},data: {
					project_id: localStorage.getItem("project_id"),
					user_id: localStorage.getItem("id"),
				},
			}).then(function(response) {
				
				$scope.blocks = response.data;
				if(!$scope.blocks.pages)
					$scope.blocks = {
						pages:[],
						posts:[],
						single:[],
						auth:[]
					};
			});
		};
		$scope.getBlockHiearchy();
		
		$scope.saveBlockHiearchy = function(){
			//console.log(JSON.stringify($scope.blocks));
			//console.log( angular.toJson($scope.blocks.pages) );
			$http({
				url: "http://letsgetstartup.com/wp-admin/admin-ajax.php", 
				method: "POST",
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				params: {
					action: "save_block_hiearchy",
					callback:'JSON_CALLBACK'
				},data: {
					project_id: localStorage.getItem("project_id"),
					user_id: localStorage.getItem("id"),
					hiearchy: $scope.blocks,
				},
			}).then(function(response) {
				//alert();
				//console.log(response.data);
			});
		};
		//Main page inputs
		$scope.pageDialogueParams = {
			name:"New page name",
		};
		$scope.postsDialogueParams = {
			name:"Posts page name",
			select:"form",
		};
		$scope.singleDialogueParams = {
			name:"Single post page name",
			selectPosts:"posts",
		};
		$scope.authDialogueParams = {
			name:"Authorization page name",
		};
		
		//Page dialogue Inputs
		$scope.pageImageDialogueParams = {
			name:$scope.vocabulary[$scope.lang]["Add new image url"],
		};
		$scope.pageTextDialogueParams = {
			text:"Add text to page",
		};
		$scope.pageFormDialogueParams = {
			name:"Add form name",
		};
		$scope.pageButtonDialogueParams = {
			text:"Add button text",
		};
		
		//Page Form Input
		$scope.formImageDialogueParams = {
			name:"Form image url",
		};
		$scope.formTextDialogueParams = {
			text:"Form text",
		};
		$scope.formVideoDialogueParams = {
			name:"Youtube url video",
		};
		$scope.formMapDialogueParams = {
			name:"Map picker",
		};
		$scope.formTextInputDialogueParams = {
			name:"Form text input",
		};
		$scope.formTextareaDialogueParams = {
			name:"Form textarea input",
		};
		$scope.formSelectDialogueParams = {
			label:"Form select input",
			addOption:"Add select option"
		};
		$scope.formCheckboxDialogueParams = {
			label:"Form check box input",
			addOption:"Add check box option"
		};
		$scope.formRadioDialogueParams = {
			label:"Form radio input",
			addOption:"Add radio button option"
		};
		
		//Posts Elements Input
		$scope.postsElemsDialogueParams = {
			selectForm:"form-element",
		};
		
		//Single Elements Input
		$scope.singleElemsDialogueParams = {
			selectSingleForm:"form-element",
		};
		
		//Block inputs
		$scope.dialogueData = {
			blockCase:"",
			blockName:"",
			blockText:"",
			blockOption:"",
			blockOptions:[],
		};
		$scope.addOption = function(){
			$scope.dialogueData.blockOptions.push($scope.dialogueData.blockOption);
			$scope.dialogueData.blockOption = "";
		};
		$scope.removeOption = function(key){
			$scope.dialogueData.blockOptions.splice(key,1);
		};
		$scope.mainBlockAdd = {
			select:{
				"pageBlock":$scope.vocabulary[$scope.lang]["Page block"],
				"postsBlock":$scope.vocabulary[$scope.lang]["Posts block"],
				"singleBlock":$scope.vocabulary[$scope.lang]["Single post block"],
				"authBlock":"Authorization pages Block"
			},
			blockCase:{
				"pageBlock":$scope.pageDialogueParams,
				"postsBlock":$scope.postsDialogueParams,
				"singleBlock":$scope.singleDialogueParams,
				"authBlock":$scope.authDialogueParams,
			}
		};
		$scope.pageBlockAdd = {
			select:{
				"pageImage":$scope.vocabulary[$scope.lang]["Add image"],
				"pageText":$scope.vocabulary[$scope.lang]["Add text"],
				"pageForm":$scope.vocabulary[$scope.lang]["Add form"],
				"pageButton":$scope.vocabulary[$scope.lang]["Add button"]
			},
			blockCase:{
				"pageImage":$scope.pageImageDialogueParams,
				"pageText":$scope.pageTextDialogueParams,
				"pageForm":$scope.pageFormDialogueParams,
				"pageButton":$scope.pageButtonDialogueParams,
			}
		};
		$scope.pageFormAdd = {
			select:{
				"formImage":$scope.vocabulary[$scope.lang]["Add image"],
				"formText":$scope.vocabulary[$scope.lang]["Add text"],
				"formVideo":$scope.vocabulary[$scope.lang]["Add video"],
				"formMap":"Add map",
				"formTextInput":$scope.vocabulary[$scope.lang]["Add text input"],
				"formTextarea":"Add textarea input",
				"formSelect":$scope.vocabulary[$scope.lang]["Add select input"],
				"formCheckbox":$scope.vocabulary[$scope.lang]["Add check box input"],
				"formRadio":$scope.vocabulary[$scope.lang]["Add radio input"],
			},
			blockCase:{
				"formImage":$scope.formImageDialogueParams,
				"formText":$scope.formTextDialogueParams,
				"formVideo":$scope.formVideoDialogueParams,
				"formMap":$scope.formMapDialogueParams,
				"formTextInput":$scope.formTextInputDialogueParams,
				"formTextarea":$scope.formTextareaDialogueParams,
				"formSelect":$scope.formSelectDialogueParams,
				"formCheckbox":$scope.formCheckboxDialogueParams,
				"formRadio":$scope.formRadioDialogueParams,
			}
		};
		$scope.postsBlockAdd = {
			select:{
				"postsText":"Display as text",
				"postsHeader":"Display as header",
				"postsImage":"Display as image",
				"postsVideo":"Display as video",
				"postsMap":"Display as map",
				"postsLink":"Display as link",
				"postsButLink":"Display as button link",
			},
			blockCase:{
				"postsText":$scope.postsElemsDialogueParams,
				"postsHeader":$scope.postsElemsDialogueParams,
				"postsImage":$scope.postsElemsDialogueParams,
				"postsVideo":$scope.postsElemsDialogueParams,
				"postsMap":$scope.postsElemsDialogueParams,
				"postsLink":$scope.postsElemsDialogueParams,
				"postsButLink":$scope.postsElemsDialogueParams,
			}
		};
		$scope.singleBlockAdd = {
			select:{
				"singleText":"Display as text",
				"singleHeader":"Display as header",
				"singleImage":"Display as image",
				"singleVideo":"Display as video",
				"singleMap":"Display as map",
				"singleLink":"Display as link",
				"singleButLink":"Display as button link",
			},
			blockCase:{
				"singleText":$scope.singleElemsDialogueParams,
				"singleHeader":$scope.singleElemsDialogueParams,
				"singleImage":$scope.singleElemsDialogueParams,
				"singleVideo":$scope.singleElemsDialogueParams,
				"singleMap":$scope.singleElemsDialogueParams,
				"singleLink":$scope.singleElemsDialogueParams,
				"singleButLink":$scope.singleElemsDialogueParams,
			}
		};
		
		$scope.addBlockDialogue = function(blockType,id=0,secondId=0,thirdId=0){
			switch(blockType) {
				case 'mainBlock':
					$scope.openDialogue($scope.mainBlockAdd);
					break;
				case 'pageBlock':
					$scope.currentId = id;
					$scope.openDialogue($scope.pageBlockAdd);
					break;
				case 'pageFormsBlock':
					$scope.currentId = id;
					$scope.secondId = secondId;
					$scope.openDialogue($scope.pageFormAdd);
					break;
				case 'postsBlock':
					$scope.currentId = id;
					$scope.openDialogue($scope.postsBlockAdd);
					break;
				case 'singleBlock':
					$scope.currentId = id;
					$scope.openDialogue($scope.singleBlockAdd);
					break;
			}
		};
		$scope.styleData = {};
		$scope.optionData = {};
		$scope.optionData.value="";
		$scope.styleData.styleOption = "";
		$scope.styleData.styleValue = "";
		$scope.styleData.styleArray = [];
		$scope.editBlockDialogue = function(blockType,id=0,secondId=0,thirdId=0){
			$scope.blockType = blockType;
			$scope.currentId = id;
			$scope.secondId = secondId;
			$scope.thirdId = thirdId;
			$scope.optionData.value="";
			$scope.styleData.styleOption = "";
			$scope.styleData.styleValue = "";
			if(blockType=="pageBlock")
			{
				$scope.styleData.styleArray = $scope.blocks.pages[id].style;
			}
			else if(blockType=="pageImageBlock"||blockType=="pageTextBlock"||blockType=="pageFormsBlock")
			{
				$scope.styleData.styleArray = $scope.blocks.pages[id].Elements[secondId].style;
			}
			else if($scope.blockType=="pageFormsElemBlock")
			{
				$scope.styleData.styleArray = $scope.blocks.pages[id].Elements[secondId].elems[thirdId].style;
			}
			else if($scope.blockType=="postsBlock")
			{
				$scope.styleData.styleArray = $scope.blocks.posts[$scope.currentId].style;
			}
			else if($scope.blockType=="postsElemBlock")
			{
				$scope.styleData.styleArray = $scope.blocks.posts[id].elems[secondId].style;
			}
			else if($scope.blockType=="singleBlock")
			{
				$scope.styleData.styleArray = $scope.blocks.single[id].style;
			}
			else if($scope.blockType=="singleElemBlock")
			{
				$scope.styleData.styleArray = $scope.blocks.single[id].elems[secondId].style;
			}
			$scope.openEditDialogue();
		};
		$scope.addStyleOption = function(){
			var newStyle = {};
			newStyle.name = $scope.styleData.styleOption;
			if(newStyle.name == "font-size" || newStyle.name == "border-radius")
				newStyle.value = $scope.styleData.styleValue+"px";
			else
				newStyle.value = $scope.styleData.styleValue;
			$scope.styleData.styleArray.push(newStyle);
		};
		$scope.removeStyleOption = function(key)
		{
			$scope.styleData.styleArray.splice(key,1);
		};
		$scope.addElemOption = function()
		{
			$scope.blocks.pages[$scope.currentId].Elements[$scope.secondId].elems[$scope.thirdId].data.push($scope.optionData.value);
			$scope.optionData.value="";
		};
		$scope.removeElemOption = function(key)
		{
			$scope.blocks.pages[$scope.currentId].Elements[$scope.secondId].elems[$scope.thirdId].data.splice(key,1);;
			$scope.optionData.value="";
		};
		$scope.saveChanges = function()
		{
			$scope.dialog.hide();
			if($scope.blockType=="pageBlock")
			{
				$scope.blocks.pages[$scope.currentId].style = $scope.styleData.styleArray;
				$scope.saveBlockHiearchy();
			}
			else if($scope.blockType=="pageImageBlock"||$scope.blockType=="pageTextBlock"||$scope.blockType=="pageFormsBlock")
			{
				$scope.blocks.pages[$scope.currentId].Elements[$scope.secondId].style = $scope.styleData.styleArray;
				$scope.saveBlockHiearchy();
			}
			else if($scope.blockType=="pageFormsElemBlock")
			{
				$scope.blocks.pages[$scope.currentId].Elements[$scope.secondId].elems[$scope.secondId].style = $scope.styleData.styleArray;
				$scope.saveBlockHiearchy();
			}
			else if($scope.blockType=="postsBlock")
			{
				$scope.blocks.posts[$scope.currentId].style = $scope.styleData.styleArray;
				$scope.saveBlockHiearchy();
			}
			else if($scope.blockType=="postsElemBlock")
			{
				$scope.blocks.posts[$scope.currentId].elems[$scope.secondId].style = $scope.styleData.styleArray;
				$scope.saveBlockHiearchy();
			}
			else if($scope.blockType=="singleBlock")
			{
				$scope.blocks.single[$scope.currentId].style = $scope.styleData.styleArray;
				$scope.saveBlockHiearchy();
			}
			else if($scope.blockType=="singleElemBlock")
			{
				$scope.blocks.single[$scope.currentId].elems[$scope.secondId].style = $scope.styleData.styleArray;
				$scope.saveBlockHiearchy();
			}
		};
		$scope.deleteBlock = function()
		{
			$scope.dialog.hide();
			if (confirm("Are you sure, you want to delete this block?")) {
				switch($scope.blockType) {
					case 'pageBlock':
						$scope.blocks.pages.splice($scope.currentId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'pageTextBlock':
						$scope.blocks.pages[$scope.currentId].Elements.splice($scope.secondId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'pageImageBlock':
						$scope.blocks.pages[$scope.currentId].Elements.splice($scope.secondId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'pageFormsBlock':
						$scope.blocks.pages[$scope.currentId].Elements.splice($scope.secondId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'pageFormsElemBlock':
						$scope.blocks.pages[$scope.currentId].Elements[$scope.secondId].elems.splice($scope.thirdId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'postsBlock':
						$scope.blocks.posts.splice($scope.currentId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'postsElemBlock':
						$scope.blocks.posts[$scope.currentId].elems.splice($scope.secondId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'singleBlock':
						$scope.blocks.single.splice($scope.currentId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'singleElemBlock':
						$scope.blocks.single[$scope.currentId].elems.splice($scope.secondId,1);
						$scope.saveBlockHiearchy();
						break;
					case 'authBlock':
						$scope.blocks.auth.splice($scope.currentId,1);
						$scope.saveBlockHiearchy();
						break;
				};
			};
		};
		$scope.openDialogue = function(fields){
			$scope.dialogueData.blockName = "";
			$scope.dialogueData.blockText = "";
			$scope.dialogueData.blockOption = "";
			$scope.dialogueData.blockOptions = [];
			$scope.dialogueData.blockCase = "";
			$scope.blockFields = fields;
			ons.createDialog('app-builder-add-dialogue.html', {parentScope: $scope}).then(function(dialog) {
				$scope.dialog = dialog;
				$scope.dialog.show();
			});
		};
		$scope.openEditDialogue = function(){
			ons.createDialog('app-builder-edit-dialogue.html', {parentScope: $scope}).then(function(dialog) {
				$scope.dialog = dialog;
				$scope.dialog.show();
			});
		};
		$scope.addBlock = function(blockName){
			$scope.dialog.hide();
			switch(blockName) {
				case 'pageBlock':
					if(!$scope.blocks.pages[0])
					{
						$scope.blocks.pages[0] = {};
						$scope.blocks.pages[0]['Title'] = $scope.dialogueData.blockName;
						$scope.blocks.pages[0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var newPage = {};
						newPage['Title'] = $scope.dialogueData.blockName;
						newPage['Style'] = [];
						$scope.blocks.pages.push(newPage);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'pageImage':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['type'] = "Image";
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['url'] = $scope.dialogueData.blockName;
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						$scope.newUrl = {};
						$scope.newUrl['type'] = "Image";
						$scope.newUrl['url'] = $scope.dialogueData.blockName;
						$scope.newUrl['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'].push($scope.newUrl);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'pageText':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['type'] = "Text";
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['text'] = $scope.dialogueData.blockText;
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						$scope.newText = {};
						$scope.newText['type'] = "Text";
						$scope.newText['text'] = $scope.dialogueData.blockText;
						$scope.newText['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'].push($scope.newText);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'pageForm':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['type'] = "Form";
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['name'] = $scope.dialogueData.blockName;
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						$scope.newForms = {};
						$scope.newForms['type'] = "Form";
						$scope.newForms['name'] = $scope.dialogueData.blockName;
						$scope.newForms['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'].push($scope.newForms);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'pageButton':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['type'] = "Button";
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['text'] = $scope.dialogueData.blockText;
						$scope.blocks.pages[$scope.currentId]['Elements'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						$scope.newButton = {};
						$scope.newButton['type'] = "Button";
						$scope.newButton['text'] = $scope.dialogueData.blockText;
						$scope.newButton['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'].push($scope.newText);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'formImage':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "image";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockName;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'image';
						elemArr['data'] = $scope.dialogueData.blockName;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'formText':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "text";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockText;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'text';
						elemArr['data'] = $scope.dialogueData.blockText;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'formVideo':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "video-input";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockName;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'video-input';
						elemArr['data'] = $scope.dialogueData.blockName;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'formMap':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "map";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockName;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'map';
						elemArr['data'] = $scope.dialogueData.blockName;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'formTextInput':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "text-input";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockName;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'text-input';
						elemArr['data'] = $scope.dialogueData.blockName;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'formTextarea':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "textarea";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockName;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'textarea';
						elemArr['data'] = $scope.dialogueData.blockName;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'formSelect':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "select";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockOptions;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = $scope.dialogueData.blockOptions;
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'select';
						elemArr['data'] = $scope.dialogueData.blockOptions;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'formCheckbox':
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "check-box";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockOptions;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'check-box';
						elemArr['data'] = $scope.dialogueData.blockOptions;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case "formRadio":
					if(!$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'])
					{
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0] = {};
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['type'] = "radio-select";
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['data'] = $scope.dialogueData.blockOptions;
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['type'] = 'radio-select';
						elemArr['data'] = $scope.dialogueData.blockOptions;
						elemArr['style'] = [];
						$scope.blocks.pages[$scope.currentId]['Elements'][$scope.secondId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'postsBlock':
					if(!$scope.blocks.posts[0])
					{
						$scope.blocks.posts[0] = {};
						$scope.blocks.posts[0]['Title'] = $scope.dialogueData.blockName;
						$scope.blocks.posts[0]['Page'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[0]['Form'] = $scope.dialogueData.blockText;
						$scope.blocks.posts[0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						$scope.blocks.posts[$scope.blocks.posts.length] = {};
						$scope.blocks.posts[$scope.blocks.posts.length]['Title'] = $scope.dialogueData.blockName;
						$scope.blocks.posts[$scope.blocks.posts.length]['Form'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[$scope.blocks.posts.length]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					break;
				case 'authBlock':
					if(!$scope.blocks.auth[0])
					{
						$scope.blocks.auth[0] = {};
						$scope.blocks.auth[0]['Title'] = $scope.dialogueData.blockName;
						$scope.blocks.auth[0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						$scope.blocks.auth[$scope.blocks.auth.length] = {};
						$scope.blocks.auth[$scope.blocks.auth.length]['Title'] = $scope.dialogueData.blockName;
						$scope.blocks.auth[$scope.blocks.auth.length]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					break;
				case 'postsText':
					if(!$scope.blocks.posts[$scope.currentId]['elems'])
					{
						$scope.blocks.posts[$scope.currentId]['elems'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'][0] = {};
						$scope.blocks.posts[$scope.currentId]['elems'][0]['display'] = "text";
						$scope.blocks.posts[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'text';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'postsHeader':
					if(!$scope.blocks.posts[$scope.currentId]['elems'])
					{
						$scope.blocks.posts[$scope.currentId]['elems'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'][0] = {};
						$scope.blocks.posts[$scope.currentId]['elems'][0]['display'] = "header";
						$scope.blocks.posts[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'header';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'postsImage':
					if(!$scope.blocks.posts[$scope.currentId]['elems'])
					{
						$scope.blocks.posts[$scope.currentId]['elems'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'][0] = {};
						$scope.blocks.posts[$scope.currentId]['elems'][0]['display'] = "image";
						$scope.blocks.posts[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'image';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'postsVideo':
					if(!$scope.blocks.posts[$scope.currentId]['elems'])
					{
						$scope.blocks.posts[$scope.currentId]['elems'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'][0] = {};
						$scope.blocks.posts[$scope.currentId]['elems'][0]['display'] = "video";
						$scope.blocks.posts[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'video';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'postsMap':
					if(!$scope.blocks.posts[$scope.currentId]['elems'])
					{
						$scope.blocks.posts[$scope.currentId]['elems'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'][0] = {};
						$scope.blocks.posts[$scope.currentId]['elems'][0]['display'] = "map";
						$scope.blocks.posts[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'map';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'postsLink':
					if(!$scope.blocks.posts[$scope.currentId]['elems'])
					{
						$scope.blocks.posts[$scope.currentId]['elems'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'][0] = {};
						$scope.blocks.posts[$scope.currentId]['elems'][0]['display'] = "link";
						$scope.blocks.posts[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'link';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'postsButLink':
					if(!$scope.blocks.posts[$scope.currentId]['elems'])
					{
						$scope.blocks.posts[$scope.currentId]['elems'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'][0] = {};
						$scope.blocks.posts[$scope.currentId]['elems'][0]['display'] = "button-link";
						$scope.blocks.posts[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.posts[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'button-link';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.posts[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'singleBlock':
					if(!$scope.blocks.single[0])
					{
						$scope.blocks.single[0] = {};
						$scope.blocks.single[0]['Title'] = $scope.dialogueData.blockName;
						$scope.blocks.single[0]['Posts'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						$scope.blocks.single[$scope.blocks.single.length] = {};
						$scope.blocks.single[$scope.blocks.single.length]['Title'] = $scope.dialogueData.blockName;
						$scope.blocks.single[$scope.blocks.single.length]['Posts'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[$scope.blocks.single.length]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					break;
				case 'singleText':
					if(!$scope.blocks.single[$scope.currentId]['elems'])
					{
						$scope.blocks.single[$scope.currentId]['elems'] = [];
						$scope.blocks.single[$scope.currentId]['elems'][0] = {};
						$scope.blocks.single[$scope.currentId]['elems'][0]['display'] = "text";
						$scope.blocks.single[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'text';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.single[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'singleHeader':
					if(!$scope.blocks.single[$scope.currentId]['elems'])
					{
						$scope.blocks.single[$scope.currentId]['elems'] = [];
						$scope.blocks.single[$scope.currentId]['elems'][0] = {};
						$scope.blocks.single[$scope.currentId]['elems'][0]['display'] = "header";
						$scope.blocks.single[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'header';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.single[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'singleImage':
					if(!$scope.blocks.single[$scope.currentId]['elems'])
					{
						$scope.blocks.single[$scope.currentId]['elems'] = [];
						$scope.blocks.single[$scope.currentId]['elems'][0] = {};
						$scope.blocks.single[$scope.currentId]['elems'][0]['display'] = "image";
						$scope.blocks.single[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'image';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.single[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'singleVideo':
					if(!$scope.blocks.single[$scope.currentId]['elems'])
					{
						$scope.blocks.single[$scope.currentId]['elems'] = [];
						$scope.blocks.single[$scope.currentId]['elems'][0] = {};
						$scope.blocks.single[$scope.currentId]['elems'][0]['display'] = "video";
						$scope.blocks.single[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'video';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.single[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'singleMap':
					if(!$scope.blocks.single[$scope.currentId]['elems'])
					{
						$scope.blocks.single[$scope.currentId]['elems'] = [];
						$scope.blocks.single[$scope.currentId]['elems'][0] = {};
						$scope.blocks.single[$scope.currentId]['elems'][0]['display'] = "map";
						$scope.blocks.single[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[$scope.currentId]['elems'][0]['style'] = style;
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'map';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.single[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'singleLink':
					if(!$scope.blocks.single[$scope.currentId]['elems'])
					{
						$scope.blocks.single[$scope.currentId]['elems'] = [];
						$scope.blocks.single[$scope.currentId]['elems'][0] = {};
						$scope.blocks.single[$scope.currentId]['elems'][0]['display'] = "link";
						$scope.blocks.single[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'link';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.single[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
				case 'singleButLink':
					if(!$scope.blocks.single[$scope.currentId]['elems'])
					{
						$scope.blocks.single[$scope.currentId]['elems'] = [];
						$scope.blocks.single[$scope.currentId]['elems'][0] = {};
						$scope.blocks.single[$scope.currentId]['elems'][0]['display'] = "button-link";
						$scope.blocks.single[$scope.currentId]['elems'][0]['formElemId'] = $scope.dialogueData.blockOption;
						$scope.blocks.single[$scope.currentId]['elems'][0]['style'] = [];
						$scope.saveBlockHiearchy();
					}
					else
					{
						var elemArr = {};
						elemArr['display'] = 'button-link';
						elemArr['formElemId'] = $scope.dialogueData.blockOption;
						elemArr['style'] = [];
						$scope.blocks.single[$scope.currentId]['elems'].push(elemArr);
						$scope.saveBlockHiearchy();
					}
					break;
			}
		};
	});
});