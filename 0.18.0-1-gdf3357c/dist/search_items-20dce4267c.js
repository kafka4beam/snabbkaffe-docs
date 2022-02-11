searchNodes=[{"doc":"This is the main API module","ref":"snabbkaffe.html","title":"snabbkaffe","type":"module"},{"doc":"","ref":"snabbkaffe.html#analyze_statistics/0","title":"snabbkaffe.analyze_statistics/0","type":"function"},{"doc":"Equivalent to block_until(Filter, Timeout, 100) .","ref":"snabbkaffe.html#block_until/2","title":"snabbkaffe.block_until/2","type":"function"},{"doc":"Block execution of the run stage of a testcase until an event matching Predicate is received or until Timeout . Note : since the most common use case for this function is the following: trigger_produce_event_async ( ) , snabbkaffe : block_until ( MatchEvent , 1000 ) there is a possible situation when the event is emitted before block_until function has a chance to run. In this case the latter will time out for no good reason. In order to work around this, block_until function actually searches for events matching Predicate in the past. BackInTime parameter determines how far back into past this function peeks. Note : In the current implementation Predicate runs for every received event. It means this function should be lightweight","ref":"snabbkaffe.html#block_until/3","title":"snabbkaffe.block_until/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#causality/5","title":"snabbkaffe.causality/5","type":"function"},{"doc":"Throws an exception when consequitive elements of the list do not comply a binary relationship. Otherwise, returns true if the list is non-empty, and false when it is empty. Example: SeqNums = ? projection ( sequence_number , ? of_kind ( handle_message , Trace ) ) , ? assert ( snabbkaffe : check_conseq_relation ( SeqNums ) ) ,","ref":"snabbkaffe.html#check_conseq_relation/3","title":"snabbkaffe.check_conseq_relation/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#cleanup/0","title":"snabbkaffe.cleanup/0","type":"function"},{"doc":"","ref":"snabbkaffe.html#collect_trace/0","title":"snabbkaffe.collect_trace/0","type":"function"},{"doc":"","ref":"snabbkaffe.html#collect_trace/1","title":"snabbkaffe.collect_trace/1","type":"function"},{"doc":"","ref":"snabbkaffe.html#dec_counters/2","title":"snabbkaffe.dec_counters/2","type":"function"},{"doc":"Dump trace to a file and return the file name","ref":"snabbkaffe.html#dump_trace/1","title":"snabbkaffe.dump_trace/1","type":"function"},{"doc":"","ref":"snabbkaffe.html#erase_timestamps/1","title":"snabbkaffe.erase_timestamps/1","type":"function"},{"doc":"Extract events of certain kind(s) from the trace","ref":"snabbkaffe.html#events_of_kind/2","title":"snabbkaffe.events_of_kind/2","type":"function"},{"doc":"Find pairs of complimentary events","ref":"snabbkaffe.html#find_pairs/4","title":"snabbkaffe.find_pairs/4","type":"function"},{"doc":"","ref":"snabbkaffe.html#fix_ct_logging/0","title":"snabbkaffe.fix_ct_logging/0","type":"function"},{"doc":"Forward traces from the remote node to the local node.","ref":"snabbkaffe.html#forward_trace/1","title":"snabbkaffe.forward_trace/1","type":"function"},{"doc":"","ref":"snabbkaffe.html#get_cfg/3","title":"snabbkaffe.get_cfg/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#get_stats/0","title":"snabbkaffe.get_stats/0","type":"function"},{"doc":"","ref":"snabbkaffe.html#inc_counters/2","title":"snabbkaffe.inc_counters/2","type":"function"},{"doc":"Throws an exception when elements of the list are not increasing. Otherwise, returns true if the list is non-empty, and false when it is empty. Example: SeqNums = ? projection ( sequence_number , ? of_kind ( handle_message , Trace ) ) , ? assert ( snabbkaffe : increasing ( SeqNums ) ) ,","ref":"snabbkaffe.html#increasing/1","title":"snabbkaffe.increasing/1","type":"function"},{"doc":"","ref":"snabbkaffe.html#local_tp/5","title":"snabbkaffe.local_tp/5","type":"function"},{"doc":"Implement all/0 callback for Common Test","ref":"snabbkaffe.html#mk_all/1","title":"snabbkaffe.mk_all/1","type":"function"},{"doc":"","ref":"snabbkaffe.html#pair_max_depth/1","title":"snabbkaffe.pair_max_depth/1","type":"function"},{"doc":"","ref":"snabbkaffe.html#projection/2","title":"snabbkaffe.projection/2","type":"function"},{"doc":"","ref":"snabbkaffe.html#projection_complete/3","title":"snabbkaffe.projection_complete/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#projection_is_subset/3","title":"snabbkaffe.projection_is_subset/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#proper_printout/2","title":"snabbkaffe.proper_printout/2","type":"function"},{"doc":"","ref":"snabbkaffe.html#push_stat/2","title":"snabbkaffe.push_stat/2","type":"function"},{"doc":"","ref":"snabbkaffe.html#push_stat/3","title":"snabbkaffe.push_stat/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#push_stats/2","title":"snabbkaffe.push_stats/2","type":"function"},{"doc":"","ref":"snabbkaffe.html#push_stats/3","title":"snabbkaffe.push_stats/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#remote_tp/5","title":"snabbkaffe.remote_tp/5","type":"function"},{"doc":"","ref":"snabbkaffe.html#retry/3","title":"snabbkaffe.retry/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#run/3","title":"snabbkaffe.run/3","type":"function"},{"doc":"Split list by predicate like this: [ true , true , false , true , true , false ] -&gt; [ [ true , true , false ] , [ true , true , false ] ]","ref":"snabbkaffe.html#splitl/2","title":"snabbkaffe.splitl/2","type":"function"},{"doc":"Split list by predicate like this: [ true , true , false , true , true , false ] -&gt; [ [ true , true ] , [ false , true , true ] , [ false ] ]","ref":"snabbkaffe.html#splitr/2","title":"snabbkaffe.splitr/2","type":"function"},{"doc":"","ref":"snabbkaffe.html#start_trace/0","title":"snabbkaffe.start_trace/0","type":"function"},{"doc":"","ref":"snabbkaffe.html#stop/0","title":"snabbkaffe.stop/0","type":"function"},{"doc":"Throws an exception when elements of the list are not strictly increasing. Otherwise, returns true if the list is non-empty, and false when it is empty. Example: SeqNums = ? projection ( sequence_number , ? of_kind ( handle_message , Trace ) ) , ? assert ( snabbkaffe : strictly_increasing ( SeqNums ) ) ,","ref":"snabbkaffe.html#strictly_increasing/1","title":"snabbkaffe.strictly_increasing/1","type":"function"},{"doc":"","ref":"snabbkaffe.html#tp/4","title":"snabbkaffe.tp/4","type":"function"},{"doc":"","ref":"snabbkaffe.html#unique/1","title":"snabbkaffe.unique/1","type":"function"},{"doc":"","ref":"snabbkaffe.html#wait_async_action/3","title":"snabbkaffe.wait_async_action/3","type":"function"},{"doc":"","ref":"snabbkaffe.html#t:event/0","title":"snabbkaffe.event/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:filter/0","title":"snabbkaffe.filter/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:kind/0","title":"snabbkaffe.kind/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:maybe/1","title":"snabbkaffe.maybe/1","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:maybe_pair/0","title":"snabbkaffe.maybe_pair/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:metric/0","title":"snabbkaffe.metric/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:predicate/0","title":"snabbkaffe.predicate/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:predicate2/0","title":"snabbkaffe.predicate2/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:run_config/0","title":"snabbkaffe.run_config/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:timed_event/0","title":"snabbkaffe.timed_event/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:timestamp/0","title":"snabbkaffe.timestamp/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:trace/0","title":"snabbkaffe.trace/0","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:trace_spec/1","title":"snabbkaffe.trace_spec/1","type":"type"},{"doc":"","ref":"snabbkaffe.html#t:trace_specs/1","title":"snabbkaffe.trace_specs/1","type":"type"},{"doc":"This module controls the event collection","ref":"snabbkaffe_collector.html","title":"snabbkaffe_collector","type":"module"},{"doc":"","ref":"snabbkaffe_collector.html#block_until/3","title":"snabbkaffe_collector.block_until/3","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#code_change/3","title":"snabbkaffe_collector.code_change/3","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#flush_trace/0","title":"snabbkaffe_collector.flush_trace/0","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#get_stats/0","title":"snabbkaffe_collector.get_stats/0","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#handle_call/3","title":"snabbkaffe_collector.handle_call/3","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#handle_cast/2","title":"snabbkaffe_collector.handle_cast/2","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#handle_info/2","title":"snabbkaffe_collector.handle_info/2","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#init/1","title":"snabbkaffe_collector.init/1","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#push_stat/3","title":"snabbkaffe_collector.push_stat/3","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#receive_events/1","title":"snabbkaffe_collector.receive_events/1","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#start_link/0","title":"snabbkaffe_collector.start_link/0","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#subscribe/4","title":"snabbkaffe_collector.subscribe/4","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#terminate/2","title":"snabbkaffe_collector.terminate/2","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#tp/3","title":"snabbkaffe_collector.tp/3","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#wait_for_silence/1","title":"snabbkaffe_collector.wait_for_silence/1","type":"function"},{"doc":"","ref":"snabbkaffe_collector.html#t:async_action/0","title":"snabbkaffe_collector.async_action/0","type":"type"},{"doc":"","ref":"snabbkaffe_collector.html#t:datapoints/0","title":"snabbkaffe_collector.datapoints/0","type":"type"},{"doc":"","ref":"snabbkaffe_collector.html#t:subscription/0","title":"snabbkaffe_collector.subscription/0","type":"opaque"},{"doc":"This module implements &quot;nemesis&quot; process that injects faults into system under test in order to test its fault-tolerance. Usage Somewhere in the tested code ? maybe_crash ( kind1 , \#{ data1 =&gt; Foo , field2 =&gt; Bar } ) Somewhere in the run stage ? inject_crash ( \#{ ? snk_kind := kind1 , data1 := 42 } , snabbkaffe_nemesis : always_crash ( ) )","ref":"snabbkaffe_nemesis.html","title":"snabbkaffe_nemesis","type":"module"},{"doc":"","ref":"snabbkaffe_nemesis.html#always_crash/0","title":"snabbkaffe_nemesis.always_crash/0","type":"function"},{"doc":"Remove all injected crashes","ref":"snabbkaffe_nemesis.html#cleanup/0","title":"snabbkaffe_nemesis.cleanup/0","type":"function"},{"doc":"Remove injected fault","ref":"snabbkaffe_nemesis.html#fix_crash/1","title":"snabbkaffe_nemesis.fix_crash/1","type":"function"},{"doc":"Inject delay into the system","ref":"snabbkaffe_nemesis.html#force_ordering/3","title":"snabbkaffe_nemesis.force_ordering/3","type":"function"},{"doc":"Equivalent to inject_crash(Predicate, Scenario, notmyday) .","ref":"snabbkaffe_nemesis.html#inject_crash/2","title":"snabbkaffe_nemesis.inject_crash/2","type":"function"},{"doc":"Inject crash into the system","ref":"snabbkaffe_nemesis.html#inject_crash/3","title":"snabbkaffe_nemesis.inject_crash/3","type":"function"},{"doc":"Check if there are any injected crashes that match this data, and respond with the crash reason if so.","ref":"snabbkaffe_nemesis.html#maybe_crash/2","title":"snabbkaffe_nemesis.maybe_crash/2","type":"function"},{"doc":"Check if the trace point should be delayed.","ref":"snabbkaffe_nemesis.html#maybe_delay/1","title":"snabbkaffe_nemesis.maybe_delay/1","type":"function"},{"doc":"A type of fault that occurs and fixes periodically.","ref":"snabbkaffe_nemesis.html#periodic_crash/3","title":"snabbkaffe_nemesis.periodic_crash/3","type":"function"},{"doc":"","ref":"snabbkaffe_nemesis.html#random_crash/1","title":"snabbkaffe_nemesis.random_crash/1","type":"function"},{"doc":"","ref":"snabbkaffe_nemesis.html#recover_after/1","title":"snabbkaffe_nemesis.recover_after/1","type":"function"},{"doc":"Start the server","ref":"snabbkaffe_nemesis.html#start_link/0","title":"snabbkaffe_nemesis.start_link/0","type":"function"},{"doc":"","ref":"snabbkaffe_nemesis.html#t:fault_key/0","title":"snabbkaffe_nemesis.fault_key/0","type":"type"},{"doc":"","ref":"snabbkaffe_nemesis.html#t:fault_scenario/0","title":"snabbkaffe_nemesis.fault_scenario/0","type":"opaque"},{"doc":"Snabbkaffe is a trace-based test framework for Erlang. It works like this: Programmer manually instruments the code with trace points Testcases are split in two parts: Run stage where the program runs and emits event trace Check stage where trace is collected and validated against the spec(s) Trace points become ordinary log messages in the release build This approach can be used in a component test involving an ensemble of interacting processes. It has a few nice properties: Checks can be separated from the program execution Checks are independent from each other and fully composable Trace contains complete history of the process execution, thus making certain types of concurrency bugs, like livelocks, easier to detect","ref":"readme.html","title":"Snabbkaffe","type":"extras"},{"doc":"","ref":"readme.html#getting-started","title":"Snabbkaffe - Getting started","type":"extras"},{"doc":"This chapter describes the high-level structure of the snabbkaffe testcase. Most of the work is done by ?check_trace macro, which can be placed inside eunit, Common Test or proper testcase.","ref":"running.html","title":"Running the testcases","type":"extras"},{"doc":"In the most basic form, Snabbkaffe tests look like this: - module ( running_example ) . - compile ( export_all ) . - include_lib ( &quot;proper/include/proper.hrl&quot; ) . - include_lib ( &quot;eunit/include/eunit.hrl&quot; ) . - include_lib ( &quot;snabbkaffe/include/snabbkaffe.hrl&quot; ) . basic_test ( ) -&gt; ? check_trace ( %% Run stage: begin ? tp ( some_event , \#{ foo =&gt; foo , bar =&gt; bar } ) end , %% Check stage: fun ( RunStageResult , Trace ) -&gt; ? assertMatch ( ok , RunStageResult ) , ? assertMatch ( [ \#{ foo := _ } ] , ? of_kind ( some_event , Trace ) ) end ) . ?check_trace macro performs the following steps: Start the snabbkaffe supervision tree Produce \#{?snk_kind := '$trace_begin'} event Execute the code specified in the run stage section Wait for the silence interval (if timeout option is set, see below) Produce \#{?snk_kind := '$trace_end'} event Collect the trace Execute the offline checks on the collected trace If either run stage or check stage fails, ?check_trace dumps the collected trace to a file and throws an exception that is detected by eunit or Common Test. The trace dumps are placed to snabbkaffe sub-directory of the current working directory. If the return value from the run stage is not needed in the check stage, it can be omitted: ignore_return_test ( ) -&gt; ? check_trace ( %% Run stage: begin ok end , %% Check stage: fun ( _ Trace ) -&gt; ok end ) . If the testcase allocates any resources that should be released after the completion of the run stage, it is recommended to use the following construct: try_after_test ( ) -&gt; ? check_trace ( try %% Allocate resources... ets : new ( foo , [ named_table ] ) , %% Run test ok after ets : delete ( foo ) end , %% Check stage: [ fun ? MODULE : common_trace_spec / 1 , fun ? MODULE : common_trace_spec / 2 , { &quot;Another trace spec&quot; , fun ( _ Result , _ Trace ) -&gt; true end } ] ) . %% Make sure the trace is a list: common_trace_spec ( Trace ) -&gt; ? assert ( is_list ( Trace ) ) . %% Check the return value of the run stage: common_trace_spec ( Result , Trace ) -&gt; ? assertMatch ( ok , Result ) . Notice another new thing in the above example: the check stage is defined as a list of callbacks. This form allows to reuse trace specifications in multiple tests.","ref":"running.html#check_trace","title":"Running the testcases - check_trace","type":"extras"},{"doc":"?check_trace macro can accept some additional arguments: options_test_ ( ) -&gt; { timeout , 15 , [ fun ( ) -&gt; ? check_trace ( \#{ timetrap =&gt; 10000 , timeout =&gt; 1000 } , %% Run stage: ok , %% Check stage: [ ] ) end ] } . timetrap specifies how long the run stage can execute (in milliseconds). If this time is exceeded, the testcase fails and the trace is dumped. It is recommended to handle the timeouts using timetrap in ?check_trace , rather than at Common Test or eunit level, because it will produce a better error message and a trace dump. timeout parameter specifies &quot;silence interval&quot; for the testcase. If it is set to T , upon completion of the run stage snabbkaffe will wait for events arriving within T milliseconds after the last received event.","ref":"running.html#check_trace-options","title":"Running the testcases - check_trace options","type":"extras"},{"doc":"There are two useful macros for running snabbkaffe together with PropER : proper_test ( ) -&gt; Config = \#{ proper =&gt; \#{ numtests =&gt; 100 , timeout =&gt; 5000 , max_size =&gt; 100 } , timetrap =&gt; 1000 } , ? run_prop ( Config , prop ( ) ) . prop ( ) -&gt; ? FORALL ( { Ret , L } , { term ( ) , list ( ) } , ? check_trace ( %% Run stage: ok , %% Check stage: [ fun ? MODULE : common_trace_spec / 1 ] ) ) . proper key of the Config contains the parameters accepted by PropEr. Snabbkaffe will fall back to the default values (shown above) when parameter is absent. ?FORALL(Var, Generator, ?check_trace(...)) construct is used very often, so snabbkaffe provides a shortcut: simple_prop_test ( ) -&gt; ? run_prop ( \#{ } , simple_prop ( ) ) . simple_prop ( ) -&gt; ? forall_trace ( { Ret , L } , { term ( ) , list ( ) } , %% Run stage: ok , %% Check stage: [ fun ? MODULE : common_trace_spec / 1 ] ) . It is equivalent to the previous example.","ref":"running.html#integrating-with-proper","title":"Running the testcases - Integrating with PropEr","type":"extras"},{"doc":"","ref":"waiting_events.html","title":"Waiting for events during run stage","type":"extras"},{"doc":"- module ( waiting_events_example ) . - include_lib ( &quot;eunit/include/eunit.hrl&quot; ) . - include_lib ( &quot;snabbkaffe/include/snabbkaffe.hrl&quot; ) .","ref":"waiting_events.html#block_until","title":"Waiting for events during run stage - block_until","type":"extras"},{"doc":"","ref":"waiting_events.html#wait_async_action","title":"Waiting for events during run stage - wait_async_action","type":"extras"},{"doc":"","ref":"waiting_events.html#subscribe_events-receive","title":"Waiting for events during run stage - subscribe_events/receive","type":"extras"},{"doc":"Even though philosophy of this library lies in separation of run and verify stages, sometimes the former needs to be aware of the events. For example, the testcase may need to wait for asynchronous initialization of some resource.","ref":"offline_analysis.html","title":"Offline analysis of the traces","type":"extras"},{"doc":"In this case ?block_until macro should be used. It allows the testcase to peek into the trace. Example usage: #+BEGIN_SRC erlang ?block_until(\#{?snk_kind := Kind}, Timeout, BackInTime) #+END_SRC Note: it's tempting to use this macro to check the result of some asynchronous action, like this: #+BEGIN_SRC erlang {ok, Pid} = foo:async_init(), {ok, Event} = ?block_until(\#{?snk_kind := foo_init, pid := Pid}), do_stuff(Pid) #+END_SRC However it's not a good idea, because the event can be emitted before =?block_until= has a chance to run. Use the following macro to avoid this race condition: #+BEGIN_SRC {{ok, Pid}, {ok, Event}} = ?wait_async_action( foo:async_init() , \#{?snk_kind := foo_init, pid := Pid} ) , do_stuff(Pid) #+END_SRC","ref":"offline_analysis.html#block_until","title":"Offline analysis of the traces - block_until","type":"extras"},{"doc":"- module ( offline_analysis_example ) . - include_lib ( &quot;eunit/include/eunit.hrl&quot; ) . - include_lib ( &quot;snabbkaffe/include/snabbkaffe.hrl&quot; ) .","ref":"offline_analysis.html#wait_async_action","title":"Offline analysis of the traces - wait_async_action","type":"extras"},{"doc":"","ref":"fault_injection.html","title":"Injecting faults into the SUT","type":"extras"},{"doc":"- module ( scheduling_injection_example ) . - include_lib ( &quot;eunit/include/eunit.hrl&quot; ) . - include_lib ( &quot;snabbkaffe/include/snabbkaffe.hrl&quot; ) .","ref":"scheduling_injection.html","title":"Injecting schedulings into the SUT","type":"extras"},{"doc":"","ref":"changelog.html","title":"Changelog","type":"extras"},{"doc":"Features Introduce snabbkaffe:increasing and snabbkaffe:check_conseq_relation functions","ref":"changelog.html#0-18-0","title":"Changelog - 0.18.0","type":"extras"},{"doc":"Features Introduce snabbkaffe:dump_trace/1 function that saves trace to a file Allow to change behavior of trace points by defining SNK_COLLECTOR macro as true or false (the latter means log trace points instead of collecting them) Fixes Fix compilation warnings Improve output of snabbkaffe:strictly_increasing function Non-BC changes API of find_pairs function and macro are heavily reworked: Strict flag has been removed and the return type has been changed. Now they don't crash when they find an effect without a cause, but instead add it to the list.","ref":"changelog.html#0-17-0","title":"Changelog - 0.17.0","type":"extras"},{"doc":"Features Passing return value to the check stage callback is made optional: ? check_trace ( RunStage , fun ( Trace ) -&gt; . . . end ) # + end_src Check stage supports a list of callbacks in the following form: #+begin_src erlang ?check_trace( RunStage, [ fun trace_check/1 , fun another_trace_check/2 , {&quot;There are no crashes&quot;, fun(Trace) -&gt; ... end} , {&quot;Another important check&quot;, fun(Return, Trace) -&gt; ... end} ]) Fixes Fix timetrap while waiting for the silence interval Non-BC changes The check stage now must return ok or true to indicate success","ref":"changelog.html#0-16-0","title":"Changelog - 0.16.0","type":"extras"},{"doc":"Fixes Fix race condition in the injected fault Features Improved event subscription mechanism using new APIs: snabbkaffe_collector:subcribe and receive_events , that aim to replace the ?wait_async_action macro: { ok , Sub } = snabbkaffe_collector : subscribe ( ? match_event ( \#{ ? snk_kind := foo } ) , _ Quantity = 2 , _ Timeout = infinity , _ BackInTime = 0 ) , . . . trigger async action . . . ? assertMatch ( { ok , [ \#{ ? snk_kind := foo , n := 1 } , \#{ ? snk_kind := foo , n := 2 } ] } , snabbkaffe_collector : receive_events ( Sub ) ) , ?block_until macro support waiting for multiple events snabbkaffe:fix_ct_logging function includes node name in the logs Non-BC fixes Error injection uses erlang:exit instead of erlang:error . This may affect a small portion of testcases that specifically expect certain errors","ref":"changelog.html#0-15-0","title":"Changelog - 0.15.0","type":"extras"},{"doc":"Fixes Fix ?of_kind and ?of_domain macros","ref":"changelog.html#0-14-1","title":"Changelog - 0.14.1","type":"extras"},{"doc":"Features Timetrap: fail a testcase and dump the trace if the run stage takes too long to complete","ref":"changelog.html#0-14-0","title":"Changelog - 0.14.0","type":"extras"},{"doc":"Features Allow user to redefine the values of ?snk_kind , ?snk_span and ?snk_meta macros","ref":"changelog.html#0-13-0","title":"Changelog - 0.13.0","type":"extras"},{"doc":"Features Allow to specify severity for ?tp_span macro Fixes Move MFA tuple to the log metadata in the prod mode","ref":"changelog.html#0-12-0","title":"Changelog - 0.12.0","type":"extras"},{"doc":"Non-BC fixes ?split_trace_at , ?splitl_trace and ?splitr_trace macros now use inverse matching. It was the original intention, but the fix is non-BWC","ref":"changelog.html#0-11-0","title":"Changelog - 0.11.0","type":"extras"},{"doc":"Features snabbkaffe.hrl has been split into parts related to tracing and running the tests","ref":"changelog.html#0-10-1","title":"Changelog - 0.10.1","type":"extras"},{"doc":"Breaking changes snabbkaffe:strictly_increasing function returns false when the list is empty Features Add ?tp_span macro that wraps around a piece of code and emits trance events when entering and completing it Fixes Fix type specs","ref":"changelog.html#0-10-0","title":"Changelog - 0.10.0","type":"extras"},{"doc":"Features Any term can be used as metric name snabbkaffe:push_stat work on remote nodes Fixes Don't filter out metrics that have less than 5 samples","ref":"changelog.html#0-9-1","title":"Changelog - 0.9.1","type":"extras"},{"doc":"Breaking changes Tracepoints without severity no longer appear in the release build as debug logs. Old behavior can be emulated by explicitly specifying debug severity using ?tp(debug, Kind, Data) macro Timestamp field ( tp ) has been moved to the metadata and renamed to time . Its resolution has been changed to microsecond. Features Add logger process metadata to the trace events Add ?of_domain and ?of_node macros Severity level of tracepoints affects severity of logs in the debug mode","ref":"changelog.html#0-9-0","title":"Changelog - 0.9.0","type":"extras"},{"doc":"Fixes Fix execution of tracepoints in TEST profile while snabbkaffe collector is not running","ref":"changelog.html#0-8-2","title":"Changelog - 0.8.2","type":"extras"},{"doc":"Breaking changes Change return type of ?causality and ?strict_causality macros to boolean Features Introduce ?force_ordering macro Introduce support for distributed tracing. snabbkaffe:forward_trace/1 function. Fixes Remove dependency on bear","ref":"changelog.html#0-8-1","title":"Changelog - 0.8.1","type":"extras"},{"doc":"Breaking changes Drop support for OTP releases below 21 Drop hut dependency, now in the release profile snabbkaffe always uses kernel logger Features Kind of the trace point now can be a string Concuerror support Fixes ?projection_complete and ?projection_is_subset macros now support multiple fields Allow usage of guards in the match patterns in all macros","ref":"changelog.html#0-7-0","title":"Changelog - 0.7.0","type":"extras"},{"doc":"Apache License Version 2.0, January 2004 http://www.apache.org/licenses/ TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION 1. Definitions. &quot;License&quot; shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document. &quot;Licensor&quot; shall mean the copyright owner or entity authorized by the copyright owner that is granting the License. &quot;Legal Entity&quot; shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, &quot;control&quot; means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity. &quot;You&quot; (or &quot;Your&quot;) shall mean an individual or Legal Entity exercising permissions granted by this License. &quot;Source&quot; form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files. &quot;Object&quot; form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types. &quot;Work&quot; shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below). &quot;Derivative Works&quot; shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof. &quot;Contribution&quot; shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, &quot;submitted&quot; means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as &quot;Not a Contribution.&quot; &quot;Contributor&quot; shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work. 2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form. 3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed. 4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions: (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and (b) You must cause any modified files to carry prominent notices stating that You changed the files; and (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and (d) If the Work includes a &quot;NOTICE&quot; text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License. 5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions. 6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file. 7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License. 8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages. 9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability. END OF TERMS AND CONDITIONS APPENDIX: How to apply the Apache License to your work. To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets &quot;[]&quot; replaced with your own identifying information. (Don't include the brackets!) The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same &quot;printed page&quot; as the copyright notice for easier identification within third-party archives. Copyright 2020-2022 k32 Copyright 2019-2020 Klarna Bank AB Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.","ref":"license.html","title":"LICENSE","type":"extras"}]