(function() {var type_impls = {
"jf_vid":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#77\">source</a><a href=\"#impl-Clone-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#77\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","jf_vid::advz::Advz"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#77\">source</a><a href=\"#impl-Debug-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#77\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","jf_vid::advz::Advz"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#77\">source</a><a href=\"#impl-PartialEq-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#77\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","jf_vid::advz::Advz"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PayloadProver%3CLargeRangeProof%3C%3CUnivariateKzgPCS%3CE%3E+as+PolynomialCommitmentScheme%3E::Evaluation%3E%3E-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/payload_prover.rs.html#202-278\">source</a><a href=\"#impl-PayloadProver%3CLargeRangeProof%3C%3CUnivariateKzgPCS%3CE%3E+as+PolynomialCommitmentScheme%3E::Evaluation%3E%3E-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H, T&gt; <a class=\"trait\" href=\"jf_vid/payload_prover/trait.PayloadProver.html\" title=\"trait jf_vid::payload_prover::PayloadProver\">PayloadProver</a>&lt;<a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.LargeRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::LargeRangeProof\">LargeRangeProof</a>&lt;&lt;<a class=\"struct\" href=\"jf_pcs/univariate_kzg/struct.UnivariateKzgPCS.html\" title=\"struct jf_pcs::univariate_kzg::UnivariateKzgPCS\">UnivariateKzgPCS</a>&lt;E&gt; as <a class=\"trait\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html\" title=\"trait jf_pcs::PolynomialCommitmentScheme\">PolynomialCommitmentScheme</a>&gt;::<a class=\"associatedtype\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html#associatedtype.Evaluation\" title=\"type jf_pcs::PolynomialCommitmentScheme::Evaluation\">Evaluation</a>&gt;&gt; for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing,\n    H: HasherDigest,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;: <a class=\"trait\" href=\"jf_vid/advz/trait.MaybeGPU.html\" title=\"trait jf_vid::advz::MaybeGPU\">MaybeGPU</a>&lt;E&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.payload_proof\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/payload_prover.rs.html#209-238\">source</a><a href=\"#method.payload_proof\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_proof\" class=\"fn\">payload_proof</a>&lt;B&gt;(\n    &amp;self,\n    payload: B,\n    range: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.usize.html\">usize</a>&gt;,\n) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.LargeRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::LargeRangeProof\">LargeRangeProof</a>&lt;&lt;<a class=\"struct\" href=\"jf_pcs/univariate_kzg/struct.UnivariateKzgPCS.html\" title=\"struct jf_pcs::univariate_kzg::UnivariateKzgPCS\">UnivariateKzgPCS</a>&lt;E&gt; as <a class=\"trait\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html\" title=\"trait jf_pcs::PolynomialCommitmentScheme\">PolynomialCommitmentScheme</a>&gt;::<a class=\"associatedtype\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html#associatedtype.Evaluation\" title=\"type jf_pcs::PolynomialCommitmentScheme::Evaluation\">Evaluation</a>&gt;&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>]&gt;,</div></h4></section></summary><div class='docblock'>Compute a proof for a subslice of payload data. <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_proof\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.payload_verify\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/payload_prover.rs.html#240-277\">source</a><a href=\"#method.payload_verify\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_verify\" class=\"fn\">payload_verify</a>(\n    &amp;self,\n    stmt: <a class=\"struct\" href=\"jf_vid/payload_prover/struct.Statement.html\" title=\"struct jf_vid::payload_prover::Statement\">Statement</a>&lt;'_, Self&gt;,\n    proof: &amp;<a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.LargeRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::LargeRangeProof\">LargeRangeProof</a>&lt;&lt;<a class=\"struct\" href=\"jf_pcs/univariate_kzg/struct.UnivariateKzgPCS.html\" title=\"struct jf_pcs::univariate_kzg::UnivariateKzgPCS\">UnivariateKzgPCS</a>&lt;E&gt; as <a class=\"trait\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html\" title=\"trait jf_pcs::PolynomialCommitmentScheme\">PolynomialCommitmentScheme</a>&gt;::<a class=\"associatedtype\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html#associatedtype.Evaluation\" title=\"type jf_pcs::PolynomialCommitmentScheme::Evaluation\">Evaluation</a>&gt;,\n) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>&gt;&gt;</h4></section></summary><div class='docblock'>Verify a proof made by <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_proof\" title=\"method jf_vid::payload_prover::PayloadProver::payload_proof\"><code>PayloadProver::payload_proof</code></a>. <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_verify\">Read more</a></div></details></div></details>","PayloadProver<LargeRangeProof<<UnivariateKzgPCS<E> as PolynomialCommitmentScheme>::Evaluation>>","jf_vid::advz::Advz"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PayloadProver%3CSmallRangeProof%3C%3CUnivariateKzgPCS%3CE%3E+as+PolynomialCommitmentScheme%3E::Proof%3E%3E-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/payload_prover.rs.html#65-200\">source</a><a href=\"#impl-PayloadProver%3CSmallRangeProof%3C%3CUnivariateKzgPCS%3CE%3E+as+PolynomialCommitmentScheme%3E::Proof%3E%3E-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H, T&gt; <a class=\"trait\" href=\"jf_vid/payload_prover/trait.PayloadProver.html\" title=\"trait jf_vid::payload_prover::PayloadProver\">PayloadProver</a>&lt;<a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.SmallRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::SmallRangeProof\">SmallRangeProof</a>&lt;&lt;<a class=\"struct\" href=\"jf_pcs/univariate_kzg/struct.UnivariateKzgPCS.html\" title=\"struct jf_pcs::univariate_kzg::UnivariateKzgPCS\">UnivariateKzgPCS</a>&lt;E&gt; as <a class=\"trait\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html\" title=\"trait jf_pcs::PolynomialCommitmentScheme\">PolynomialCommitmentScheme</a>&gt;::<a class=\"associatedtype\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html#associatedtype.Proof\" title=\"type jf_pcs::PolynomialCommitmentScheme::Proof\">Proof</a>&gt;&gt; for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing,\n    H: HasherDigest,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;: <a class=\"trait\" href=\"jf_vid/advz/trait.MaybeGPU.html\" title=\"trait jf_vid::advz::MaybeGPU\">MaybeGPU</a>&lt;E&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.payload_proof\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/payload_prover.rs.html#72-126\">source</a><a href=\"#method.payload_proof\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_proof\" class=\"fn\">payload_proof</a>&lt;B&gt;(\n    &amp;self,\n    payload: B,\n    range: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.usize.html\">usize</a>&gt;,\n) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.SmallRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::SmallRangeProof\">SmallRangeProof</a>&lt;&lt;<a class=\"struct\" href=\"jf_pcs/univariate_kzg/struct.UnivariateKzgPCS.html\" title=\"struct jf_pcs::univariate_kzg::UnivariateKzgPCS\">UnivariateKzgPCS</a>&lt;E&gt; as <a class=\"trait\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html\" title=\"trait jf_pcs::PolynomialCommitmentScheme\">PolynomialCommitmentScheme</a>&gt;::<a class=\"associatedtype\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html#associatedtype.Proof\" title=\"type jf_pcs::PolynomialCommitmentScheme::Proof\">Proof</a>&gt;&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>]&gt;,</div></h4></section></summary><div class='docblock'>Compute a proof for a subslice of payload data. <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_proof\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.payload_verify\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/payload_prover.rs.html#128-199\">source</a><a href=\"#method.payload_verify\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_verify\" class=\"fn\">payload_verify</a>(\n    &amp;self,\n    stmt: <a class=\"struct\" href=\"jf_vid/payload_prover/struct.Statement.html\" title=\"struct jf_vid::payload_prover::Statement\">Statement</a>&lt;'_, Self&gt;,\n    proof: &amp;<a class=\"struct\" href=\"jf_vid/advz/payload_prover/struct.SmallRangeProof.html\" title=\"struct jf_vid::advz::payload_prover::SmallRangeProof\">SmallRangeProof</a>&lt;&lt;<a class=\"struct\" href=\"jf_pcs/univariate_kzg/struct.UnivariateKzgPCS.html\" title=\"struct jf_pcs::univariate_kzg::UnivariateKzgPCS\">UnivariateKzgPCS</a>&lt;E&gt; as <a class=\"trait\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html\" title=\"trait jf_pcs::PolynomialCommitmentScheme\">PolynomialCommitmentScheme</a>&gt;::<a class=\"associatedtype\" href=\"jf_pcs/trait.PolynomialCommitmentScheme.html#associatedtype.Proof\" title=\"type jf_pcs::PolynomialCommitmentScheme::Proof\">Proof</a>&gt;,\n) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>&gt;&gt;</h4></section></summary><div class='docblock'>Verify a proof made by <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_proof\" title=\"method jf_vid::payload_prover::PayloadProver::payload_proof\"><code>PayloadProver::payload_proof</code></a>. <a href=\"jf_vid/payload_prover/trait.PayloadProver.html#tymethod.payload_verify\">Read more</a></div></details></div></details>","PayloadProver<SmallRangeProof<<UnivariateKzgPCS<E> as PolynomialCommitmentScheme>::Proof>>","jf_vid::advz::Advz"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Precomputable-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/precomputable.rs.html#25-143\">source</a><a href=\"#impl-Precomputable-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H, T&gt; <a class=\"trait\" href=\"jf_vid/precomputable/trait.Precomputable.html\" title=\"trait jf_vid::precomputable::Precomputable\">Precomputable</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing,\n    H: HasherDigest,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;: <a class=\"trait\" href=\"jf_vid/advz/trait.MaybeGPU.html\" title=\"trait jf_vid::advz::MaybeGPU\">MaybeGPU</a>&lt;E&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.PrecomputeData\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PrecomputeData\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"jf_vid/precomputable/trait.Precomputable.html#associatedtype.PrecomputeData\" class=\"associatedtype\">PrecomputeData</a> = <a class=\"struct\" href=\"jf_vid/advz/precomputable/struct.PrecomputeData.html\" title=\"struct jf_vid::advz::precomputable::PrecomputeData\">PrecomputeData</a>&lt;E&gt;</h4></section></summary><div class='docblock'>Precomputed data that can be (re-)used during disperse computation</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit_only_precompute\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/precomputable.rs.html#34-49\">source</a><a href=\"#method.commit_only_precompute\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/precomputable/trait.Precomputable.html#tymethod.commit_only_precompute\" class=\"fn\">commit_only_precompute</a>&lt;B&gt;(\n    &amp;self,\n    payload: B,\n) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;(Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Commit\" title=\"type jf_vid::VidScheme::Commit\">Commit</a>, Self::<a class=\"associatedtype\" href=\"jf_vid/precomputable/trait.Precomputable.html#associatedtype.PrecomputeData\" title=\"type jf_vid::precomputable::Precomputable::PrecomputeData\">PrecomputeData</a>)&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>]&gt;,</div></h4></section></summary><div class='docblock'>Similar to <a href=\"jf_vid/trait.VidScheme.html#tymethod.commit_only\" title=\"method jf_vid::VidScheme::commit_only\"><code>VidScheme::commit_only</code></a> but returns additional data that\ncan be used as input to <code>disperse_precompute</code> for faster dispersal.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.disperse_precompute\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz/precomputable.rs.html#51-142\">source</a><a href=\"#method.disperse_precompute\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/precomputable/trait.Precomputable.html#tymethod.disperse_precompute\" class=\"fn\">disperse_precompute</a>&lt;B&gt;(\n    &amp;self,\n    payload: B,\n    data: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/precomputable/trait.Precomputable.html#associatedtype.PrecomputeData\" title=\"type jf_vid::precomputable::Precomputable::PrecomputeData\">PrecomputeData</a>,\n) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"struct\" href=\"jf_vid/struct.VidDisperse.html\" title=\"struct jf_vid::VidDisperse\">VidDisperse</a>&lt;Self&gt;&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>]&gt;,</div></h4></section></summary><div class='docblock'>Similar to <a href=\"jf_vid/trait.VidScheme.html#tymethod.disperse\" title=\"method jf_vid::VidScheme::disperse\"><code>VidScheme::disperse</code></a> but takes as input additional\ndata for more efficient computation and faster disersal.</div></details></div></details>","Precomputable","jf_vid::advz::Advz"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VidScheme-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#391-723\">source</a><a href=\"#impl-VidScheme-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H, T&gt; <a class=\"trait\" href=\"jf_vid/trait.VidScheme.html\" title=\"trait jf_vid::VidScheme\">VidScheme</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing,\n    H: HasherDigest,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;: <a class=\"trait\" href=\"jf_vid/advz/trait.MaybeGPU.html\" title=\"trait jf_vid::advz::MaybeGPU\">MaybeGPU</a>&lt;E&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Commit\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Commit\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"jf_vid/trait.VidScheme.html#associatedtype.Commit\" class=\"associatedtype\">Commit</a> = HasherNode&lt;H&gt;</h4></section></summary><div class='docblock'>Payload commitment.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Share\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Share\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"jf_vid/trait.VidScheme.html#associatedtype.Share\" class=\"associatedtype\">Share</a> = <a class=\"struct\" href=\"jf_vid/advz/struct.Share.html\" title=\"struct jf_vid::advz::Share\">Share</a>&lt;E, H&gt;</h4></section></summary><div class='docblock'>Share-specific data sent to a storage node.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Common\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Common\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" class=\"associatedtype\">Common</a> = <a class=\"struct\" href=\"jf_vid/advz/struct.Common.html\" title=\"struct jf_vid::advz::Common\">Common</a>&lt;E, H&gt;</h4></section></summary><div class='docblock'>Common data sent to all storage nodes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.commit_only\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#404-418\">source</a><a href=\"#method.commit_only\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/trait.VidScheme.html#tymethod.commit_only\" class=\"fn\">commit_only</a>&lt;B&gt;(&amp;mut self, payload: B) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Commit\" title=\"type jf_vid::VidScheme::Commit\">Commit</a>&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>]&gt;,</div></h4></section></summary><div class='docblock'>Compute a payload commitment</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.disperse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#420-501\">source</a><a href=\"#method.disperse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/trait.VidScheme.html#tymethod.disperse\" class=\"fn\">disperse</a>&lt;B&gt;(&amp;mut self, payload: B) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"struct\" href=\"jf_vid/struct.VidDisperse.html\" title=\"struct jf_vid::VidDisperse\">VidDisperse</a>&lt;Self&gt;&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>]&gt;,</div></h4></section></summary><div class='docblock'>Compute shares to send to the storage nodes</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.verify_share\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#503-616\">source</a><a href=\"#method.verify_share\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/trait.VidScheme.html#tymethod.verify_share\" class=\"fn\">verify_share</a>(\n    &amp;self,\n    share: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Share\" title=\"type jf_vid::VidScheme::Share\">Share</a>,\n    common: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"type jf_vid::VidScheme::Common\">Common</a>,\n    commit: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Commit\" title=\"type jf_vid::VidScheme::Commit\">Commit</a>,\n) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>&gt;&gt;</h4></section></summary><div class='docblock'>Verify a share. Used by both storage node and retrieval client.\nWhy is return type a nested <code>Result</code>? See <a href=\"https://sled.rs/errors\">https://sled.rs/errors</a>\nReturns: <a href=\"jf_vid/trait.VidScheme.html#tymethod.verify_share\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recover_payload\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#618-695\">source</a><a href=\"#method.recover_payload\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/trait.VidScheme.html#tymethod.recover_payload\" class=\"fn\">recover_payload</a>(\n    &amp;self,\n    shares: &amp;[Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Share\" title=\"type jf_vid::VidScheme::Share\">Share</a>],\n    common: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"type jf_vid::VidScheme::Common\">Common</a>,\n) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u8.html\">u8</a>&gt;&gt;</h4></section></summary><div class='docblock'>Recover payload from shares.\nDo not verify shares or check recovered payload against anything.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_consistent\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#697-710\">source</a><a href=\"#method.is_consistent\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/trait.VidScheme.html#tymethod.is_consistent\" class=\"fn\">is_consistent</a>(commit: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Commit\" title=\"type jf_vid::VidScheme::Commit\">Commit</a>, common: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"type jf_vid::VidScheme::Common\">Common</a>) -&gt; <a class=\"type\" href=\"jf_vid/type.VidResult.html\" title=\"type jf_vid::VidResult\">VidResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Check that a <a href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"associated type jf_vid::VidScheme::Common\"><code>VidScheme::Common</code></a> is consistent with a\n<a href=\"jf_vid/trait.VidScheme.html#associatedtype.Commit\" title=\"associated type jf_vid::VidScheme::Commit\"><code>VidScheme::Commit</code></a>. <a href=\"jf_vid/trait.VidScheme.html#tymethod.is_consistent\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_payload_byte_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#712-714\">source</a><a href=\"#method.get_payload_byte_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/trait.VidScheme.html#tymethod.get_payload_byte_len\" class=\"fn\">get_payload_byte_len</a>(common: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"type jf_vid::VidScheme::Common\">Common</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u32.html\">u32</a></h4></section></summary><div class='docblock'>Extract the payload byte length data from a <a href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"associated type jf_vid::VidScheme::Common\"><code>VidScheme::Common</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_num_storage_nodes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#716-718\">source</a><a href=\"#method.get_num_storage_nodes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/trait.VidScheme.html#tymethod.get_num_storage_nodes\" class=\"fn\">get_num_storage_nodes</a>(common: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"type jf_vid::VidScheme::Common\">Common</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u32.html\">u32</a></h4></section></summary><div class='docblock'>Extract the number of storage nodes from a <a href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"associated type jf_vid::VidScheme::Common\"><code>VidScheme::Common</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_multiplicity\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#720-722\">source</a><a href=\"#method.get_multiplicity\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"jf_vid/trait.VidScheme.html#tymethod.get_multiplicity\" class=\"fn\">get_multiplicity</a>(common: &amp;Self::<a class=\"associatedtype\" href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"type jf_vid::VidScheme::Common\">Common</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.u32.html\">u32</a></h4></section></summary><div class='docblock'>Extract the number of poly evals per share <a href=\"jf_vid/trait.VidScheme.html#associatedtype.Common\" title=\"associated type jf_vid::VidScheme::Common\"><code>VidScheme::Common</code></a>.</div></details></div></details>","VidScheme","jf_vid::advz::Advz"],["<section id=\"impl-Eq-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#77\">source</a><a href=\"#impl-Eq-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","jf_vid::advz::Advz"],["<section id=\"impl-StructuralPartialEq-for-AdvzInternal%3CE,+H,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_vid/advz.rs.html#77\">source</a><a href=\"#impl-StructuralPartialEq-for-AdvzInternal%3CE,+H,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, H, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"jf_vid/advz/struct.AdvzInternal.html\" title=\"struct jf_vid::advz::AdvzInternal\">AdvzInternal</a>&lt;E, H, T&gt;<div class=\"where\">where\n    E: Pairing,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h3></section>","StructuralPartialEq","jf_vid::advz::Advz"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()