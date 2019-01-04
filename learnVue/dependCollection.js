为什么要依赖收集？
避免不必要的变量造成的重新渲染

关键： 如果一个变量被依赖，肯定会触发getter事件，所以只需要在该处进行依赖收集即可

//依赖收集类
class Dep {
	constructor() {
		this.subs = [];
	}
	addSub(watcher) {
		this.subs.push(watcher)
	},
	notify () {
        // stabilize the subscriber list first
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}