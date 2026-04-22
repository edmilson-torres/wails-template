export namespace main {
	
	export class FileInfo {
	    FullPath: string;
	    Name: string;
	    Ext: string;
	
	    static createFrom(source: any = {}) {
	        return new FileInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.FullPath = source["FullPath"];
	        this.Name = source["Name"];
	        this.Ext = source["Ext"];
	    }
	}

}

