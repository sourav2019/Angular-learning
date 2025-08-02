npm i -g angular/cli
ng version
ng new my-app

ng g c components/component

ng g p pipes/name

ng g d directives/name

life cycle method:
constructor
ngOnchanges[calls multiple time]
ngOnInit
ngAfterViewInit
ngOnDistroy [cleanup]