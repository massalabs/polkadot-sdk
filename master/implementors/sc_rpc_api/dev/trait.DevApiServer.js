(function() {var implementors = {
"sc_rpc":[["impl&lt;Block, Client&gt; <a class=\"trait\" href=\"sc_rpc/dev/trait.DevApiServer.html\" title=\"trait sc_rpc::dev::DevApiServer\">DevApiServer</a>&lt;&lt;Block as <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>&gt; for <a class=\"struct\" href=\"sc_rpc/dev/struct.Dev.html\" title=\"struct sc_rpc::dev::Dev\">Dev</a>&lt;Block, Client&gt;<span class=\"where fmt-newline\">where\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + 'static,\n    Client: BlockBackend&lt;Block&gt; + HeaderBackend&lt;Block&gt; + ProvideRuntimeApi&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    Client::Api: Core&lt;Block&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()