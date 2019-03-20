
$(document).ready(function(){
	
	$('#searchUser').on('keyup',function(e){

let username= e.target.value;

$.ajax({
	
	url:'https://api.github.com/users/'+username,
	data:{
		client_id:'22cb2d4fe516ad1e6d01',
		client_secret:'3e13198335de696353fb6f0e90b81a7ab4fcfb8c'
		
	}
	
}).done(function(user){
	$.ajax({
		
		url:'https://api.github.com/users/'+username+'/repos',
		data:{
		client_id:'22cb2d4fe516ad1e6d01',
		client_secret:'3e13198335de696353fb6f0e90b81a7ab4fcfb8c',
		sort: 'created: asc',
		per_page:5
		
	}
	}).done(function(repos){
		$.each(repos,function(index,repo){
			
			$('#repos').append(`
			
			<div class="well">
			
			<div class="row">
			
			<div class="col-md-7">
			<strong> ${repo.name}</strong> : ${repo.description}
			
			</div>
			<div class="col-md-3">
			
			<span class="badge badge-primary"> Forks : ${repo.forks_count}</span>
			<span class="badge badge-success"> wathers :${repo.watchers_count}</span>
			<span class="badge badge-secondary">  Stars : ${repo.stargazers_count}</span>

			</div>
			
			<div class="col-md-2">
			<a href="${repo.html_url}" target"_blank" class="btn btn-primary"> repo page</a>
			</div>
			
			
		</div>
		
	</div>
                                                     			
			
			`);
			
		});
		
		
		
	});
		
	
	$('#profile').html(`
	
	
	<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
  </div>
  <div class="panel-body">
    
	<div class="row">
	
	<div class="col-md-3">
	
	<img class="thumbnail avatar" src="${user.avatar_url}">
	<a  target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
	
	</div>
	
	
	<div class="col-md-9">
	<span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
<span class="badge badge-secondary">Public Gits : ${user.public_gists}</span>
<span class="badge badge-success">Followers: ${user.followers}</span>
<span class="badge badge-danger">Following: ${user.following}</span>
<br><br>

<ul class="list-group">

<li class="list-group-item">Company: ${user.company}</li>
<li class="list-group-item">Website/blog: ${user.blog}</li>
<li class="list-group-item">Location: ${user.location}</li>
<li class="list-group-item">Memeber since: ${user.created_at}</li>
<li class="list-group-item">Bio: ${user.bio}</li>
</ul>

	
	</div>
	
	
	
	</div>
	
	
	
  </div>
</div>
	<h3 class="page-header" > Latest-repo </h3>
	<div id="repos"></div>
	
	
	
	`);
	
	
});

	});
});