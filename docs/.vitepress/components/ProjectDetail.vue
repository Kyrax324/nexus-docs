<template>
	<div>
		Test
		<!-- <Content :raw="true" :markdown="true">
		# This is some **Markdown** content.

		It can contain any valid Markdown markup.
		</Content> -->
	</div>
</template>

<script>
import { useData } from 'vitepress'
export default {
	data(){
		return {
      		markdown: ''
		}
	},
	created(){
		this.test()
	},
	methods:{
		test(){
			const data = useData()
			console.log(data.theme)
			this.markdown = `## asdas
			

\`\`\`
console.log('123123')
asdasd
asdas
\`\`\`
			`

			return this.markdown
		}
	}
}
</script>